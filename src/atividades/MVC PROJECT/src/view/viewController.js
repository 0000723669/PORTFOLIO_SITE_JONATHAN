import { formNewUser } from "./form-new-user.js";
import { resultView } from "./result-view.js";

const viewController = {
  build: () => {
    formNewUser.build();
    resultView.build();
  },
  update: (params) => {
    const trBody = document.querySelector("#users-result");
    for(let i=0; i<params.lenght;i++){
      trBody.innerHTML=`
        <th scope="row">#${i+1}</th>  
        <td>#${params}</td>  
        <td>#${params}</td>  
        <td>#${params}</td>  
        <td>#${params}</td>  
      `
    }
    
  },
};
export { viewController };
