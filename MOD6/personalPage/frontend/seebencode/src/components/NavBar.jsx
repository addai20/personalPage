import React, { Component } from 'react';

class NavBar extends Component {
  render(){
    return(
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="">Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link" href="https://drive.google.com/file/d/1NwM9uMUiDWYwB0ccgouWMHHtAUIFBReF/view?usp=sharing" rel="external" target="_blank">Resume <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="https://medium.com/@addai20" rel="external" target="_blank">Blog</a>
      <a class="nav-item nav-link" href="https://github.com/addai20" rel="external" target="_blank">GitHub</a>
      <a class="nav-item nav-link" href="https://www.linkedin.com/in/benjamin-addai-1339b863/" rel="external" target="_blank">LinkedIn</a>
      <a class="nav-item nav-link" href="">Contact</a>

    </div>
  </div>
</nav>
    )
  }
}

export default NavBar
