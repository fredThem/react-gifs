import React, { Component } from "react";
import SearchBar from "./search_bar.jsx";
import Gif from "./gif.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      gifs: [],
      selectedGifId: ""
    }
  }
  
  // render() {
  //   return (
  //     <div>
  //       <div className="left-scene">
  //         <SearchBar />
  //         <div className="selected-gif">
  //           <Gif />
  //         </div>
  //       </div>
  //       <div className="right-scene" />
  //     </div>
  //   );
  // }
}

export default App;
