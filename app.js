import {  onGetTasks, saveTask, deleteTask, getTask, updateTask, getTasks,
          saveDepto, verDepto, reRenderDepto,
          saveClase, reRenderClase, saveFam, reRenderFamilia
} from "./js/firebase.js";

// Formularios
const form = document.getElementById("form");
const formDepto = document.getElementById("formDept");
const formClase = document.getElementById("formClase");
const formFamilia = document.getElementById("formFamilia");
// Contenedores
const dataBase = document.getElementById("displayData");
const containerDpto = document.getElementById("displayDepartamento");
const containerClase = document.getElementById("displayClase");
const containerFam = document.getElementById("displayFamilia");


let editStatus = false;
let id = "";


//---------------           RENDER EN DB           ---------------//


window.addEventListener("DOMContentLoaded", async () => {
  await onGetTasks((querySnapshot) => {
    dataBase.innerHTML = "";

  querySnapshot.forEach((doc) => {
    const Articulo = doc.data();

    dataBase.innerHTML += `
          <div class="art-container">
              <div class="w-10 mr">${Articulo.sku}</div>
              <div class="w-20">${Articulo.articulo}</div>
              <div class="w-20">${Articulo.marca}</div>
              <div class="w-20">${Articulo.modelo}</div>
              <div class="w-25">${Articulo.departamento}</div>
              <div class="w-20">${Articulo.clase}</div>
              <div class="w-20">${Articulo.familia}</div>
              <div class="w-20">${Articulo.cantidad}</div>
              <div class="w-15">${Articulo.stock}</div>
              <div class="w-20 date">${Articulo.fechaAlta}</div>
              <div class="w-20 date">${Articulo.fechaBaja}</div>
              <div class="buttons-art">
                <button class="btn delete-btn" data-id="${doc.id}">&#9932</button>
                <button class="btn edit-btn" data-id="${doc.id}">&#9998</button>
              </div>
          </div>
        `;
});

//---------------           ELIMINAR BD           ---------------//


const btnsDelete = dataBase.querySelectorAll(".delete-btn");
btnsDelete.forEach((btn) =>
  btn.addEventListener("click", async ({ target: { dataset } }) => {
    try {
      await deleteTask(dataset.id);
    } catch (error) {
      console.log(error);
    }
  })
);
    
//---------------           EDIT DB           ---------------//

    const btnsEdit = dataBase.querySelectorAll(".edit-btn");
    btnsEdit.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        try {
          const doc = await getTask(e.target.dataset.id);
          const Articulo = doc.data();
          form["sku"].value = Articulo.sku;
          form["articulo"].value = Articulo.articulo;
          form["marca"].value = Articulo.marca;
          form["modelo"].value = Articulo.modelo;
          form["departamento"].value = Articulo.departamento;
          form["clase"].value = Articulo.clase;
          form["familia"].value = Articulo.familia;
          form["cantidad"].value = Articulo.cantidad;
          form["stock"].value = Articulo.stock;
          form["fechaAlta"].value = Articulo.fechaAlta;
          form["fechaBaja"].value = Articulo.fechaBaja;
          editStatus = true;
          id = doc.id;
          form["insertar"].innerText = "Cambiar";
          form["eliminar"].style.display = "flex";
        } catch (error) {
          console.log(error);
        }
      });
    });
  });
});


//---------------           SUBMIT           ---------------//


form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const sku = form["sku"];
  const articulo = form["articulo"];
  const marca = form["marca"];
  const modelo = form["modelo"];
  const departamento = form["departamento"];
  const clase = form["clase"];
  const familia = form["familia"];
  const cantidad = form["cantidad"];
  const stock = form["stock"];
  const fechaAlta = form["fechaAlta"];
  const fechaBaja = form["fechaBaja"];

  try {
    if (!editStatus) {
      await saveTask(
        sku.value,
        articulo.value,
        marca.value,
        modelo.value,
        departamento.value,
        clase.value,
        familia.value,
        cantidad.value,
        stock.value,
        fechaAlta.value,
        fechaBaja.value);
    } else {
      await updateTask(id, {
        sku: sku.value,
        articulo: articulo.value,
        marca: marca.value,
        modelo: modelo.value,
        departamento: departamento.value,
        clase: clase.value,
        familia: familia.value,
        cantidad: cantidad.value,
        stock: stock.value,
        fechaAlta: fechaAlta.value,
        fechaBaja: fechaBaja.value
      });

      editStatus = false;
      id = "";
      form["eliminar"].style.display = "none";
      form["insertar"].innerText = "Guardar";
    }

    form.reset();
    sku.focus();
  } catch (error) {
    console.log(error);
  }
});


//---------------           DEPARTAMENTO           ---------------//
// SAVE DEPTO
formDepto.addEventListener('submit', async (e) =>{
  e.preventDefault();
  const noDepto = formDepto['noDepto'];
  const depto = formDepto['depto'];

  await saveDepto(noDepto.value, depto.value)
  alert("Departamento agregado a 🔥Base")
  formDepto.reset()
  noDepto.focus()
})

// RENDER
window.addEventListener('DOMContentLoaded', async () => {
  await reRenderDepto((querySnapshot) => {
      containerDpto.innerHTML = ''
      querySnapshot.forEach (doc => {
          const depto = doc.data()
          containerDpto.innerHTML += `
              <li>${depto.departamento}</li>
          `
      })

      const selectDpto = document.getElementById('departamento')
      selectDpto.innerHTML = ''
      querySnapshot.forEach (doc => {
        const depto = doc.data()
        selectDpto.innerHTML += `
            <option>${depto.departamento}</option>
        `
    })
  })
})

//---------------           CLASE           ---------------//
// GUARDAR
formClase.addEventListener('submit', async (e) =>{
  e.preventDefault();
  const noClase = formClase['noClase'];
  const clase = formClase['clase'];

  await saveClase(noClase.value, clase.value)
  alert("Clase agregada a 🔥Base")
  noClase.value = ""
  clase.value = ""
  noClase.focus()
})

// RENDER
window.addEventListener('DOMContentLoaded', async () => {
  await reRenderClase((querySnapshot) => {
      containerClase.innerHTML = ''
      querySnapshot.forEach (doc => {
          const clase = doc.data()
          containerClase.innerHTML += `
              <li>${clase.clase}</li>
          `
      })

      const selectClase = document.getElementById('clase')
      selectClase.innerHTML = ''
      querySnapshot.forEach (doc => {
        const clase = doc.data()
        selectClase.innerHTML += `
            <option>${clase.clase}</option>
        `
      })
  })
})

//---------------           FAMILIAS           ---------------//

// GUARDAR
formFamilia.addEventListener('submit', async (e) =>{
  e.preventDefault();
  const noFamilia = formFamilia['noFamilia'];
  const familia = formFamilia['fam'];

  await saveFam(noFamilia.value, familia.value)
  alert("Familia agregada a 🔥Base")
  noFamilia.value = ""
  familia.value = ""
  noFam.focus()
})

// RENDER
window.addEventListener('DOMContentLoaded', async () => {
  await reRenderFamilia((querySnapshot) => {
      containerFam.innerHTML = ''
      querySnapshot.forEach (doc => {
          const familia = doc.data()
          containerFam.innerHTML += `
              <li>${familia.familia}</li>
          `
      })

      const selectFamilia = document.getElementById('familia')
      selectFamilia.innerHTML = ''
      querySnapshot.forEach (doc => {
        const fam = doc.data()
        selectFamilia.innerHTML += `
            <option>${fam.familia}</option>
        `
      })
  })
})



