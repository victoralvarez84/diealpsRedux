import React from 'react';
import Backbone from 'backbone';

class Splash extends React.Component {

  handleSubmit = () => {
    Backbone.history
      .navigate(`/splash`, true);
  }

  componentDidMount() {
    $(document).ready(function(){
      $(".button a").click(function(){
          $(".overlay").fadeToggle(200);
         $(this).toggleClass('btn-open').toggleClass('btn-close');
      });
  });
  }





  render() {
    return (
<div>
<nav>
<div className="button">
DIEALPS!
<a className="btn-open" href="#">
</a>
</div>
</nav>

<div className="overlay">
<div className="wrap">

<section id="landing">
<iframe src="https://www.youtube.com/embed/cfEgqviFlU8" frameborder="0" allowfullscreen></iframe>
<div className="albumArt">
<img src="assets/diealpsAlbum.jpg"/>
<button><a href="#">BUY THE ALBUM</a></button>
</div>
</section>

<section id="content">
<div className="news">
<h1>NEWS</h1>
<h2>HELLO!</h2>
<p className="dateTime">09/18/17</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
sed do eiusmod tempor   incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
<h2>WE'RE DOING THINGS!</h2>
<p className="dateTime">08/10/17</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
sed do eiusmod tempor   incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
</div>
<div className="videos">
<h1>VIDEO</h1>
<iframe  src="https://www.youtube.com/embed/VTvyC0_u-JU" frameborder="0" allowfullscreen></iframe>
<iframe  src="https://www.youtube.com/embed/Nfqtcq18irc" frameborder="0" allowfullscreen></iframe>

<div className="social">


<a href="#">
<div className="social-icon">
<i className="fa fa-facebook"></i>
</div>
</a>



<a href="#">
<div className="social-icon">
<i className="fa fa-twitter"></i>
</div>
</a>



<a href="#">
<div className="social-icon">
<i className="fa fa-instagram"></i>
</div>
</a>


<a href="#">
<div className="social-icon">
<i className="fa fa-spotify"></i>
</div>
</a>



<a href="#">
<div className="social-icon">
<i className="fa fa-bandcamp"></i>
</div>
</a>



<a href="#">
<div className="social-icon">
<i className="fa fa-youtube"></i>
</div>
</a>


</div>
</div>
</section>
<section id="bottom">
<p>COPYRIGHT &copy; 2017 DIEALPS!</p>
<div className="footerLinks">
<a href="mailto:diealps@gmail.com">BOOKING</a>
<a href="mailto:michelle@noisyghostpr.com">PRESS</a>
</div>
</section>
</div>
</div>

<section id="splash">
<div className="button">
<a className="btn-open" href="#"></a>
</div>
<h1>DIEALPS!</h1>
</section>
</div>

     );
  }
}

export default Splash;
