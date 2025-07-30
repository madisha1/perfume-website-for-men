function showCategory(category,) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.products-container').forEach(pc => pc.classList.add('hidden'));
  document.getElementById(category).classList.remove('hidden');
  event.target.classList.add('active');
}

window.onload = () => {
  filterproducts('men'); 
};