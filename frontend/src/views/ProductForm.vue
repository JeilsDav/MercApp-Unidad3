<!-- frontend/src/views/ProductForm.vue -->
<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useApi } from '../composables/useApi';

const route = useRoute();
const router = useRouter();
const { request, loading, error } = useApi();

const isEdit = computed(() => !!route.params.id);

const form = ref({
  name: '',
  description: '',
  price: '',
  imageUrl: '',
  categoryId: '',
  stock: 0,
});

const categories = ref([]);
const fieldErrors = ref({});

function validate() {
  const errs = {};

  if (!form.value.name.trim()) {
    errs.name = 'El nombre es obligatorio';
  }

  const price = Number(form.value.price);
  if (Number.isNaN(price) || price <= 0) {
    errs.price = 'El precio debe ser un número mayor que 0';
  }

  if (!form.value.categoryId) {
    errs.categoryId = 'Selecciona una categoría';
  }

  const stock = Number(form.value.stock);
  if (Number.isNaN(stock) || stock < 0) {
    errs.stock = 'El stock debe ser 0 o mayor';
  }

  if (!form.value.imageUrl.trim()) {
    errs.imageUrl = 'La URL de imagen es obligatoria';
  } else {
    try {
      new URL(form.value.imageUrl);
    } catch {
      errs.imageUrl = 'La URL de imagen no es válida';
    }
  }

  fieldErrors.value = errs;
  return Object.keys(errs).length === 0;
}

onMounted(async () => {
  // Cargar categorías
  categories.value = await request('/categories');

  // Si es edición, cargar producto
  if (isEdit.value) {
    const p = await request(`/products/${route.params.id}`);
    form.value = {
      name: p.name ?? '',
      description: p.description ?? '',
      price: p.price ?? '',
      imageUrl: p.imageUrl ?? '',
      categoryId: p.categoryId ?? '',
      stock: p.stock ?? 0,
    };
  }
});

async function submitForm() {
  if (!validate()) return;

  const payload = {
    ...form.value,
    price: Number(form.value.price),
    stock: Number(form.value.stock),
  };

  if (isEdit.value) {
    await request(`/products/${route.params.id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    });
  } else {
    await request('/products', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  router.push('/');
}
</script>

<template>
  <section>
    <h1 v-if="isEdit">Editar producto</h1>
    <h1 v-else>Nuevo producto</h1>

    <form @submit.prevent="submitForm" class="form">
      <div class="field">
        <label>Nombre *</label>
        <input v-model="form.name" />
        <small v-if="fieldErrors.name" class="error">{{ fieldErrors.name }}</small>
      </div>

      <div class="field">
        <label>Descripción</label>
        <textarea v-model="form.description" rows="3" />
      </div>

      <div class="field">
        <label>Precio *</label>
        <input type="number" step="0.01" v-model="form.price" />
        <small v-if="fieldErrors.price" class="error">{{ fieldErrors.price }}</small>
      </div>

      <div class="field">
        <label>Categoría *</label>
        <select v-model="form.categoryId">
          <option value="">Selecciona una categoría</option>
          <option
            v-for="c in categories"
            :key="c.id"
            :value="c.id"
          >
            {{ c.name }}
          </option>
        </select>
        <small v-if="fieldErrors.categoryId" class="error">{{ fieldErrors.categoryId }}</small>
      </div>

      <div class="field">
        <label>Stock *</label>
        <input type="number" min="0" v-model="form.stock" />
        <small v-if="fieldErrors.stock" class="error">{{ fieldErrors.stock }}</small>
      </div>

      <div class="field">
        <label>URL de imagen *</label>
        <input v-model="form.imageUrl" />
        <small v-if="fieldErrors.imageUrl" class="error">{{ fieldErrors.imageUrl }}</small>
      </div>

      <div v-if="form.imageUrl" class="preview">
        <p>Vista previa:</p>
        <img :src="form.imageUrl" alt="preview" />
      </div>

      <div v-if="error" class="error" style="margin-top:8px">
        Error: {{ error }}
      </div>

      <button type="submit" :disabled="loading">
        {{ loading ? 'Guardando…' : (isEdit ? 'Guardar cambios' : 'Crear producto') }}
      </button>

      <button type="button" @click="router.back()" style="margin-left:8px">
        Cancelar
      </button>
    </form>
  </section>
</template>

<style scoped>
.form {
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.field {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
input,
select,
textarea {
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
}
button {
  padding: 6px 10px;
}
.error {
  color: #c00;
}
.preview img {
  max-width: 100%;
  border-radius: 8px;
  margin-top: 4px;
}
</style>
