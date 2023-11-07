const apiUrl = "http://localhost:8081/jla-be/v1/admin/accounts";

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((response) => {
    console.log(response.data[0]);
    let tableData = "";
    response.data.map((value) => {
      tableData += `<tr>
                        <td>${value.id}</td>
                        <td>${value.mail}</td>
                        <td>${value.lastName}</td>
                        <td>${value.firstName}</td>
                        <td>${value.phone}</td>
                        <td>${value.dob}</td>
                        <td>${value.avatar}</td>
                        <td>${value.status}</td>
                        <td>
                            <a href="edit_account.html" class="btn btn-info edit">Sửa</a>
                            <button onclick="confirm('Bạn đã chắc xoá chưa?')" type="submit"
                                class="btn btn-danger delete">Xóa</button>
                        </td>
                    </tr>`;
    });
    document.getElementById("table_body").innerHTML = tableData;
  })
  .catch((error) => {
    console.error("Error:", error);
  });
