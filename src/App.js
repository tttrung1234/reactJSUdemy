import React from 'react';


class App extends React.Component {
    
    
   render() {
      
      return (
          
         <div>

             <Header/>
             <Content/>
         </div>
       
         
      );
   }

}




class Header extends React.Component{
    render() {
        return(
           

        <div>
            <h1>header thay đổi nè</h1>
            
        </div>

        );
    }
}

class Content extends React.Component{
    render() {
        return(
            <div>
                <h1>content</h1>
            </div>
        );
    }
}


export default App;