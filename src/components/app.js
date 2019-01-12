import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './searchBar';
import ImageList from './imageList';


class App extends React.Component{
    state={images:[]};
 onSearchSubmit = async term=>{
    const response = await unsplash.get('/search/photos', {
params: {query: term }

});

this.setState({images: response.data.results});
}
render(){

    return(
        <div className="ui container " style={{marginTop: '40px', marginLeft:'40px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
           
           <ImageList images={this.state.images}/>
           
            Found:{this.state.images.length} images
        </div>    
          
    );
}
}
export default App