
const insert = document.getElementById('insert')

window.
addEventListener('keydown', (press) => {
    insert.innerHTML = `
        <div class="color">
            <table>
  <tr>
    <td>Key</td>
    <td>KeyCode</td>
    <td>Code</td>
  </tr>
  <tr>
    <td>${press.key === " " ? 'space': press.key}</td>
    <td>${press.keyCode}</td>
    <td>${press.code}</td>
  </tr>
</table>
        </div>
    `
})