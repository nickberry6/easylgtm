import React from 'react'

class Create extends React.Component {
  super(props){

  }

  componentDidMount(){
    var canvas = document.getElementById('lgtmCanvas');
    var ctx = canvas.getContext('2d');

    /* Enable Cross Origin Image Editing */
    var img = new Image();
    img.crossOrigin = '';
    img.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/koala.jpg';

    img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height);

    var $reset = $('#resetbtn');
    var $brightness = $('#brightnessbtn');
    var $reset = $('#resetbtn');
    var $brightness = $('#brightnessbtn');
    var $noise = $('#noisebtn');
    var $sepia = $('#sepiabtn');
    var $contrast = $('#contrastbtn');
    var $color = $('#colorbtn');

    var $vintage = $('#vintagebtn');
    var $lomo = $('#lomobtn');
    var $emboss = $('#embossbtn');
    var $tiltshift = $('#tiltshiftbtn');
    var $radialblur = $('#radialblurbtn');
    var $edgeenhance = $('#edgeenhancebtn');

    var $posterize = $('#posterizebtn');
    var $clarity = $('#claritybtn');
    var $orangepeel = $('#orangepeelbtn');
    var $sincity = $('#sincitybtn');
    var $sunrise = $('#sunrisebtn');
    var $crossprocess = $('#crossprocessbtn');

    var $hazydays = $('#hazydaysbtn');
    var $love = $('#lovebtn');
    var $grungy = $('#grungybtn');
    var $jarques = $('#jarquesbtn');
    var $pinhole = $('#pinholebtn');
    var $oldboot = $('#oldbootbtn');
    var $glowingsun = $('#glowingsunbtn');

    var $hdr = $('#hdrbtn');
    var $oldpaper = $('#oldpaperbtn');
    var $pleasant = $('#pleasantbtn');

    var $save = $('#savebtn');

    /* As soon as slider value changes call applyFilters */
    $('input[type=range]').change(applyFilters);

    function applyFilters() {
    var hue = parseInt($('#hue').val());
    var cntrst = parseInt($('#contrast').val());
    var vibr = parseInt($('#vibrance').val());
    var sep = parseInt($('#sepia').val());

    Caman('#lgtmCanvas', img, function() {
      this.revert(false);
      this.hue(hue).contrast(cntrst).vibrance(vibr).sepia(sep).render();
    });
    }

    $reset.on('click', function(e) {
      $('input[type=range]').val(0);
      Caman('#lgtmCanvas', img, function() {
        this.revert(false);
        this.render();
      });
    });

    /* In built filters */
    $brightness.on('click', function(e) {
      Caman('#lgtmCanvas', function() {
        this.brightness(30).render();
      });
    });

    $noise.on('click', function(e) {
      Caman('#lgtmCanvas', img, function() {
        this.noise(10).render();
      });
    });

    $contrast.on('click', function(e) {
      Caman('#lgtmCanvas', img, function() {
        this.contrast(10).render();
      });
    });

    $sepia.on('click', function(e) {
      Caman('#lgtmCanvas', img, function() {
        this.sepia(20).render();
      });
    });

    $color.on('click', function(e) {
      Caman('#lgtmCanvas', img, function() {
        this.colorize(60, 105, 218, 10).render();
      });
    });

    $vintage.on('click', function(e) {
      Caman('#lgtmCanvas', img, function() {
        this.vintage().render();
      });
    });

    $lomo.on('click', function(e) {
      Caman('#lgtmCanvas', img, function() {
        this.lomo().render();
      });
    });

    $emboss.on('click', function(e) {
      Caman('#lgtmCanvas', img, function() {
        this.emboss().render();
      });
    });

    $tiltshift.on('click', function(e) {
      Caman('#lgtmCanvas', img, function() {
        this.tiltShift({
        angle: 90,
        focusWidth: 600
        }).render();
      });
    });

    $radialblur.on('click', function(e) {
      Caman('#lgtmCanvas', img, function() {
        this.radialBlur().render();
      });
    });

    $edgeenhance.on('click', function(e) {
      Caman('#lgtmCanvas', img, function() {
        this.edgeEnhance().render();
      });
    });

    $posterize.on('click', function(e) {
      Caman('#lgtmCanvas', img, function() {
        this.posterize(8, 8).render();
      });
    });

    $clarity.on('click', function(e) {
      Caman('#lgtmCanvas', img, function() {
        this.clarity().render();
      });
    });

    $orangepeel.on('click', function(e) {
      Caman('#lgtmCanvas', img, function() {
        this.orangePeel().render();
      });
    });

    $sincity.on('click', function(e) {
      Caman('#lgtmCanvas', img, function() {
        this.sinCity().render();
      });
    });

    $sunrise.on('click', function(e) {
      Caman('#lgtmCanvas', img, function() {
        this.sunrise().render();
      });
    });

    $crossprocess.on('click', function(e) {
      Caman('#lgtmCanvas', img, function() {
        this.crossProcess().render();
      });
    });

    $love.on('click', function(e) {
      Caman('#lgtmCanvas', img, function() {
        this.love().render();
      });
    });

    $grungy.on('click', function(e) {
    Caman('#lgtmCanvas', img, function() {
    this.grungy().render();
    });
    });

    $jarques.on('click', function(e) {
      Caman('#lgtmCanvas', img, function() {
        this.jarques().render();
      });
    });

    $pinhole.on('click', function(e) {
      Caman('#lgtmCanvas', img, function() {
        this.pinhole().render();
      });
    });

    $oldboot.on('click', function(e) {
      Caman('#lgtmCanvas', img, function() {
        this.oldBoot().render();
      });
    });

    $glowingsun.on('click', function(e) {
      Caman('#lgtmCanvas', img, function() {
        this.glowingSun().render();
      });
    });

    $hazydays.on('click', function(e) {
      Caman('#lgtmCanvas', img, function() {
        this.hazyDays().render();
      });
    });

    /* Calling multiple filters inside same function */
    $hdr.on('click', function(e) {
      Caman('#lgtmCanvas', img, function() {
        this.contrast(10);
        this.contrast(10);
        this.jarques();
        this.render();
      });
    });

    /* Custom filters that we created */
    $oldpaper.on('click', function(e) {
    Caman('#lgtmCanvas', img, function() {
        this.oldpaper();
        this.render();
      });
    });

    $pleasant.on('click', function(e) {
    Caman('#lgtmCanvas', img, function() {
      this.pleasant();
      this.render();
    });
    });

    /* You can also save it as a jpg image, extension need to be added later after saving image. */

    $save.on('click', function(e) {
        Caman('#lgtmCanvas', img, function() {
          this.render(function() {
            this.save('png');
        });
      });
    });


    }
  }

  render() {
    return (
      <div className="container">
        <div className="col-lg-12 d-flex justify-content-center pt-2">
          <div className="pr-1">
            <button id="resetbtn" className="btn btn-success">Reset Photo</button>
          </div>
          <div className="pl-1">
            <button id="savebtn" className="btn btn-success">Save Image</button>
          </div>
        </div>
        <div className="col-lg-12 d-flex justify-content-center p-2">
          <canvas id="lgtmCanvas"></canvas>
        </div>
        <div className="col-lg-12 d-flex justify-content-center p-2">
          <div>
            <label htmlFor="hue">Hue</label>
            <input id="hue" name="hue" type="range" min="0" max="300" />
          </div>
          <div>
            <label htmlFor="contrast">Contrast</label>
            <input id="contrast" name="contrast" type="range" min="-20" max="20" />
          </div>
          <div>
            <label htmlFor="vibrance">Vibrance</label>
            <input id="vibrance" name="vibrance" type="range" min="0" max="400" />
          </div>
          <div>
            <label htmlFor="sepia">Sepia</label>
            <input id="sepia" name="sepia" type="range" min="0" max="100" />
          </div>
        </div>
        <div className="col-lg-12 d-flex justify-content-center">

          <div className="col-lg-8 justify-content-center">

            <button id="brightnessbtn" className="btn btn-primary">Brightness</button>
            <button id="noisebtn" className="btn btn-primary">Noise</button>
            <button id="sepiabtn" className="btn btn-primary">Sepia</button>
            <button id="contrastbtn" className="btn btn-primary">Contrast</button>
            <button id="colorbtn" className="btn btn-primary">Colorize</button>



            <button id="vintagebtn" className="btn btn-primary">Vintage</button>
            <button id="lomobtn" className="btn btn-primary">Lomo</button>
            <button id="embossbtn" className="btn btn-primary">Emboss</button>
            <button id="tiltshiftbtn" className="btn btn-primary">Tilt Shift</button>
            <button id="radialblurbtn" className="btn btn-primary">Radial Blur</button>
            <button id="edgeenhancebtn" className="btn btn-primary">Edge Enhance</button>



            <button id="posterizebtn" className="btn btn-primary">Posterize</button>
            <button id="claritybtn" className="btn btn-primary">Clarity</button>
            <button id="orangepeelbtn" className="btn btn-primary">Orange Peel</button>
            <button id="sincitybtn" className="btn btn-primary">Sin City</button>
            <button id="sunrisebtn" className="btn btn-primary">Sun Rise</button>
            <button id="crossprocessbtn" className="btn btn-primary">Cross Process</button>

            <button id="hazydaysbtn" className="btn btn-primary">Hazy</button>
            <button id="lovebtn" className="btn btn-primary">Love</button>
            <button id="grungybtn" className="btn btn-primary">Grungy</button>
            <button id="jarquesbtn" className="btn btn-primary">Jarques</button>
            <button id="pinholebtn" className="btn btn-primary">Pin Hole</button>
            <button id="oldbootbtn" className="btn btn-primary">Old Boot</button>
            <button id="glowingsunbtn" className="btn btn-primary">Glow Sun</button>
          </div>
        </div>
      </div>);
  }
}

export default Create
