
<template>
  <div class="navbar sticky top-0 py-3 z-5 bg-blue-500 shadow-2">
    <div class="container">
      <h1 class="text-white" >Тестовое задание</h1>
    </div>
  </div>
  <div class="container my-4">
    <DataTable :value="items">
      <Column v-for="col in columns" :field="col.field" :header="col.header"  style="width: 30%"></Column>
      <Column  header="Action"  style="width: 10%">
        <template #body="{data}">
          <Button class="flex align-items-center"  @click="update(data.name)">
            <p class="pi pi-pencil mr-2" />
            <p>Редактировать</p>
          </Button>
        </template>
      </Column>
    </DataTable>
  </div>
  <Dialog v-model:visible="visible" modal header="Редактировать"  :style="{ width: '30%' }">
    <p></p>
    <InputText type="text" class="w-full mt-2" v-model="model.value"/>
    <template #footer>
      <Button label="Отмена" icon="pi pi-times" @click="visible = false" text />
      <Button label="Сохранить" @click="save(model.name)" icon="pi pi-check" autofocus />
    </template>
  </Dialog>
</template>
<script setup lang="ts">
import { ref} from "vue";
interface Imodel{
  name: string,
  value: string
}
const visible = ref(false);
const model = ref<Imodel>({
  name:'',
  value:''
})
const findedModel = ref<Imodel>({
  name:'',
  value:''
})
const updateModel = ref<Imodel>({
  name:'',
  value:''
})
const columns = ref([
  {
    header: 'Name',
    field: 'name',
  },
  {
    header: 'Value',
    field: 'value',
  },
])
const items = ref([
  {
    name: "foo1",
    value: "bar1",
  },
  {
    name: "foo2",
    value: "bar2",
  },
  {

    name: "foo3",
    value: "bar3",
  },
  {

    name: "foo4",
    value: "bar4"
  },
  {

    name: "foo5",
    value: "bar5"
  },
  {

    name: "foo6",
    value: "bar6"
  },
  {

    name: "foo7",
    value: "bar7"
  },
  {

    name: "foo8",
    value: "bar8"
  },
  {

    name: "foo9",
    value: "bar9"
  },
  {

    name: "foo10",
    value: "bar10"
  },
  {

    name: "foo11",
    value: "bar11"
  },
  {
    name: "foo12",
    value: "bar12"
  },
  {
    name: "foo14",
    value: "bar14"
  },
  {
    name: "foo15",
    value: "bar15"
  },
  {
    name: "foo16",
    value: "bar16"
  },
  {
    name: "foo17",
    value: "bar17"
  },
  {
    name: "foo18",
    value: "bar18"
  },
  {
    name: "foo19",
    value: "bar19"
  },
  {
    name: "foo20",
    value: "bar20"
  },
  {
    name: "foo21",
    value: "bar21"
  },
  {
    name: "foo22",
    value: "bar22"
  },
  {
    name: "foo23",
    value: "bar23"
  },
  {
    name: "foo24",
    value: "bar24"
  },
  {
    name: "foo25",
    value: "bar25"
  },
  {
    name: "foo26",
    value: "bar26"
  },
  {
    name: "foo27",
    value: "bar27"
  },
  {
    name: "foo28",
    value: "bar28"
  },
  {
    name: "foo29",
    value: "bar29"
  },
  {
    name: "foo30",
    value: "bar30"
  }
]);
const update = (itemName:string)=>{
  visible.value = true;
  findedModel.value = items.value.find((el)=>{
    return el.name===itemName}
  )
  Object.assign(model.value,findedModel.value)
}
const save = (modelName:string)=>{

  updateModel.value = items.value.find((el)=>{
    return el.name===modelName}
  )

  Object.assign(updateModel.value, model.value)
  visible.value = false
}
</script>

<style>
h1{
  font-family: "Inter", sans-serif;
}
.container{
  width: 40%;
  margin: auto;
}
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.p-datatable .p-datatable-tbody > tr > td{
  justify-content: flex-start;
}
</style>
