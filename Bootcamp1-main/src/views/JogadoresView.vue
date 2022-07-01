<script>
export default {
  data() {
    return {
      jogadores: [
      
      ],
      novo_jogador: "",
    };
  },
  methods: {
    salvar() {
      
      this.jogadores.push({
        
        nome: this.novo_jogador,
      });
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Cadastrar Editoras</h2>
    </div>
    <div class="form-input">
      <input type="text" v-model="novo_jogador" />
      <button @click="salvar">Cadastrar</button>
    </div>
    <div class="list-jogadores">
      <table>
        <thead>
          <tr>
            <th>Editoras</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="jogadores in jogadores" :key="jogadores.id">
            
            <td>{{ jogadores.nome }}</td>
            
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
