import { defineStore } from 'pinia';

const KEY = 'mercapp_cart';

export const useCart = defineStore('cart', {
  state: () => ({ items: JSON.parse(localStorage.getItem(KEY) || '[]') }),
  getters: {
    total: (s) => s.items.reduce((acc, it) => acc + it.price * it.qty, 0)
  },
  actions: {
    add(p) {
      const f = this.items.find(i => i._id === p._id || i.id === p.id);
      const id = p.id || p._id;
      if (f) f.qty++;
      else this.items.push({ id, name: p.name, price: p.price, imageUrl: p.imageUrl, qty: 1 });
      this.persist();
    },
    remove(id) {
      this.items = this.items.filter(i => i.id !== id);
      this.persist();
    },
    setQty(id, qty) {
      const f = this.items.find(i => i.id === id);
      if (f) { f.qty = Math.max(1, qty|0); this.persist(); }
    },
    clear() { this.items = []; this.persist(); },
    persist() { localStorage.setItem(KEY, JSON.stringify(this.items)); }
  }
});
