// UC4 Display Employee Details in Tabular Format using Template Literals

window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

/*UC 4 – Display Employee Details in Tabular Format using Template Literals */
//Template literal ES6 feature

const createInnerHtml = () => {
    const innerHtml =`
        <tr>
        <th></th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>
    </tr>
    <tr>
           <td><img class="profile" alt="" src="Ellipse -9.png" style="width: 70px;
               height: 52px;"></td>
           <td>Prateek</td>
           <td>Male</td>
           <td>
               <div class="dept-label">Engineering</div>
               <div class="dept-label">Finance</div>
           </td>
           <td>800000</td>
           <td>04 Nov 2021</td>
           <td>
               <img id="1" onclick="remove(this)" alt="delete" src="delete-black-18dp.svg">
               <img id="1" onclick="update(this)" alt="edit" src="create-black-18dp.svg">
           </td>
    </tr>`;
    document.querySelector('#table-display').innerHTML = innerHtml;
};
