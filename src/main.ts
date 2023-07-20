import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import router from './router'
import 'primevue/resources/primevue.css'
import 'primevue/resources/themes/arya-blue/theme.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css';
import Menu from "primevue/menu";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Row from "primevue/row";
import ColumnGroup from "primevue/columngroup";
import InputText from "primevue/inputtext";

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.component('Menu',Menu)
app.component('Button',Button)
app.component('Dialog',Dialog)
app.component('DataTable',DataTable)
app.component('Column',Column)
app.component('Row',Row)
app.component('ColumnGroup ',ColumnGroup)
app.component('InputText',InputText)
app.mount('#app')
