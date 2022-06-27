<script>
export default {
  data() {
    return {
      times: [
    
      ],
      novo_time: "AFSAFW",
    };
  },
  methods: {
    salvar() {
      
      this.times.push({
        
        nome: this.novo_time,
          });
        },
      },
    };
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Cadastrar livros </h2>
    </div>
    <div class="form-input">
      <input type="text" v-model="novo_time" />
      <button @click="salvar">Cadastrar</button>
    </div>
    <div class="list-times">
      <table>
        <thead> 
          <tr>
            <th>Livros</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="times in times" :key="times.id">
            
            <td>{{ times.nome }}</td>
            
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
.title {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}
.form-input {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.form-input input {
  width: 60%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 10px;
}

.form-input button {
  margin-left: 1%;
  width: 20%;
  height: 40px;
  border: 1px solid rgb(36, 127, 65);
  border-radius: 10px;
  background-color: rgb(36, 127, 65);
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.list-times {
  display: flex;
  justify-content: center;
}

table {
  width: 50%;
  margin: 2% auto;
  border-collapse: collapse;
}

table tr th {
  border: 1px solid #ccc;
  padding: 10px;
  font-weight: bold;
}

table tr td {
  border: 1px solid #ccc;
  padding: 10px;
}

table tr:nth-child(odd) {
  background-color: #ccc;
}
</style>
