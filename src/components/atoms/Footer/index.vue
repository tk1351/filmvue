<template>
  <footer class="footer">
    <strong>SNS</strong>
    <ul class="footer__list">
      <li>Twitter</li>
      <li>Filmarks</li>
    </ul>
    <small class="footer__owner">tk33220</small>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  height: 160px;
  background-color: $main-color;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footer__list {
  display: flex;
  gap: 40px;
}

.footer__owner {
  margin-top: 20px;
}
</style>
