import React from 'react';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.base64ToBlob = this.handleChange.bind(this);
  }

  componentDidMount() {
    var img = new Image();
    img.crossOrigin = '';
    img.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/koala.jpg';
    var canvas = document.getElementById('lgtmCanvas');
    var ctx = canvas.getContext('2d');

    img.onload = function() {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);
      ctx.font = '150px Georgia';
      var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop('0', ' black');
      gradient.addColorStop('0.5', '#eeeeee');
      gradient.addColorStop('1.0', 'black');
      // Fill with gradient
      ctx.fillStyle = gradient;
      ctx.fillText('LGTM', 20, 130);
    };

    this.state = {
      canvasImage: img
    };
  }

  base64ToBlob(base64, mime) {
    mime = mime || '';
    var sliceSize = 1024;
    var byteChars = window.atob(base64);
    var byteArrays = [];

    for (var offset = 0, len = byteChars.length; offset < len; offset += sliceSize) {
      var slice = byteChars.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: mime });
  }

  handleClick($event) {
    $event.preventDefault();
    switch ($event.target.id) {
      case 'save':
        var image;

        Caman('#lgtmCanvas', this.state.canvasImage, function() {
          this.render(function() {
            image = this.toBase64();
          });
        });

        var url = 'http://localhost:3333/lgtm/meme';

        var blob = this.base64ToBlob(image, 'image/png');
        var formData = new FormData();
        formData.append('picture', blob);

        // $.ajax({
        //   url: url,
        //   type: 'POST',
        //   cache: false,
        //   contentType: false,
        //   processData: false,
        //   data: formData
        // }).done(function(e) {
        //   alert('done!');
        // });

        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'You will perhaps need to define a content-type here'
          },
          body: formData
        })
          .then(response => response.json())
          .then(success => console.log(success))
          .catch(error => console.log(error));

        break;

      case 'download':
        Caman('#lgtmCanvas', this.state.canvasImage, function() {
          this.render(function() {
            this.save('png');
          });
        });
        break;

      case 'upload':
        var file = document.querySelector('#upload').files[0];
        var reader = new FileReader();
        if (file) {
          var fileName = file.name;
          reader.readAsDataURL(file);
        }
        var canvas = document.getElementById('lgtmCanvas');
        var ctx = canvas.getContext('2d');
        reader.addEventListener(
          'load',
          function() {
            var img = new Image();
            img.src = reader.result;
            img.onload = function() {
              canvas.width = img.width;
              canvas.height = img.height;
              ctx.drawImage(img, 0, 0, img.width, img.height);
            };
          },
          false
        );
        break;

      case 'reset':
        // $('input[type=range]').val(0);
        Caman('#lgtmCanvas', this.state.canvasImage, function() {
          this.revert(false);
          this.render();
        });
        break;

      case 'brightness':
        Caman('#lgtmCanvas', this.state.canvasImage, function() {
          this.brightness();

          this.render();
        });
        break;

      case 'noise':
        Caman('#lgtmCanvas', this.state.canvasImage, function() {
          this.noise(10).render();
        });
        break;

      case 'contrast':
        Caman('#lgtmCanvas', this.state.canvasImage, function() {
          this.contrast(10).render();
        });
        break;

      case 'sepia':
        Caman('#lgtmCanvas', this.state.canvasImage, function() {
          this.sepia(20).render();
        });
        break;

      case 'color':
        Caman('#lgtmCanvas', this.state.canvasImage, function() {
          this.colorize(60, 105, 218, 10).render();
        });
        break;

      case 'vintage':
        Caman('#lgtmCanvas', this.state.canvasImage, function() {
          this.vintage().render();
        });
        break;

      case 'lomo':
        Caman('#lgtmCanvas', this.state.canvasImage, function() {
          this.lomo().render();
        });
        break;

      case 'emboss':
        Caman('#lgtmCanvas', this.state.canvasImage, function() {
          this.emboss().render();
        });
        break;

      case 'tiltshift':
        Caman('#lgtmCanvas', this.state.canvasImage, function() {
          this.tiltShift({
            angle: 90,
            focusWidth: 600
          }).render();
        });
        break;

      case 'radialblur':
        Caman('#lgtmCanvas', this.state.canvasImage, function() {
          this.radialBlur().render();
        });
        break;

      case 'edgeenhance':
        Caman('#lgtmCanvas', this.state.canvasImage, function() {
          this.edgeEnhance().render();
        });
        break;

      case 'posterize':
        Caman('#lgtmCanvas', this.state.canvasImage, function() {
          this.posterize(8, 8).render();
        });
        break;

      case 'clarity':
        Caman('#lgtmCanvas', this.state.canvasImage, function() {
          this.clarity().render();
        });
        break;

      case 'orangepeel':
        Caman('#lgtmCanvas', this.state.canvasImage, function() {
          this.orangePeel().render();
        });
        break;

      case 'sincity':
        Caman('#lgtmCanvas', this.state.canvasImage, function() {
          this.sinCity().render();
        });
        break;

      case 'sunrise':
        Caman('#lgtmCanvas', this.state.canvasImage, function() {
          this.sunrise().render();
        });
        break;

      case 'crossprocess':
        Caman('#lgtmCanvas', this.state.canvasImage, function() {
          this.crossProcess().render();
        });
        break;

      case 'love':
        Caman('#lgtmCanvas', this.state.canvasImage, function() {
          this.love().render();
        });
        break;

      case 'grungy':
        Caman('#lgtmCanvas', this.state.canvasImage, function() {
          this.grungy().render();
        });
        break;

      case 'jarques':
        Caman('#lgtmCanvas', this.state.canvasImage, function() {
          this.jarques().render();
        });
        break;

      case 'pinhole':
        Caman('#lgtmCanvas', this.state.canvasImage, function() {
          this.pinhole().render();
        });
        break;

      case 'oldboot':
        Caman('#lgtmCanvas', this.state.canvasImage, function() {
          this.oldBoot().render();
        });
        break;

      case 'glowingsun':
        Caman('#lgtmCanvas', this.state.canvasImage, function() {
          this.glowingSun().render();
        });
        break;

      case 'hazydays':
        Caman('#lgtmCanvas', this.state.canvasImage, function() {
          this.hazyDays().render();
        });
        break;

      case 'hdr':
        Caman('#lgtmCanvas', this.state.canvasImage, function() {
          this.contrast(10);
          this.contrast(10);
          this.jarques();
          this.render();
        });
        break;

      case 'oldpaper':
        Caman('#lgtmCanvas', this.state.canvasImage, function() {
          this.oldpaper();
          this.render();
        });
        break;
      case 'pleasant':
        Caman('#lgtmCanvas', this.state.canvasImage, function() {
          this.pleasant();
          this.render();
        });
        break;

      default:
        return false;
    }
  }

  handleChange($event) {
    this.applyFilters();
  }

  applyFilters() {
    var hue = document.getElementById('hue').value;
    var cntrst = document.getElementById('contrast').value;
    var vibr = document.getElementById('vibrance').value;
    var sep = document.getElementById('sepia').value;
    var bright = document.getElementById('brightness').value;

    Caman('#lgtmCanvas', this.state.canvasImage, function() {
      this.revert(false);
      this.hue(hue)
        .contrast(cntrst)
        .vibrance(vibr)
        .sepia(sep)
        .brightness(bright)

        .render();
    });
  }

  render() {
    return (
      <div className="container">
        <div className="col-lg-12 d-flex justify-content-center pt-2">
          <div className="pr-1">
            <button id="reset" className="btn btn-success" onClick={e => this.handleClick(e)}>
              Reset Photo
            </button>
          </div>
          <div className="pl-1">
            <button id="save" className="btn btn-warning" onClick={e => this.handleClick(e)}>
              Save Image
            </button>
          </div>
          <div className="pl-1">
            <button id="download" className="btn btn-info" onClick={e => this.handleClick(e)}>
              Download Image
            </button>
          </div>
          <div className="pl-1">
            <div className="col-lg-12">
              <div className="custom-file">
                <input type="file" className="custom-file-input" id="upload" onChange={e => this.handleClick(e)} />
                <label className="custom-file-label" htmlFor="upload">
                  Upload Image...
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 d-flex justify-content-center p-2">
          <canvas id="lgtmCanvas" />
        </div>
        <div className="col-lg-12 d-flex justify-content-center p-2">
          <div>
            <label htmlFor="contrast">Brightness</label>

            <input
              id="brightness"
              name="brightness"
              className="custom-range"
              type="range"
              min="-100"
              max="100"
              step="1"
              data-filter="brightness"
              onChange={e => this.handleChange(e)}
            />
            <span className="FilterValue">0</span>
          </div>
          <div>
            <label htmlFor="hue">Hue</label>
            <input
              id="hue"
              name="hue"
              type="range"
              className="custom-range"
              min="0"
              max="300"
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor="contrast">Contrast</label>
            <input
              id="contrast"
              name="contrast"
              type="range"
              className="custom-range"
              min="-20"
              max="20"
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor="vibrance">Vibrance</label>
            <input
              id="vibrance"
              name="vibrance"
              type="range"
              className="custom-range"
              min="0"
              max="400"
              onChange={e => this.handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor="sepia">Sepia</label>
            <input
              id="sepia"
              name="sepia"
              type="range"
              min="0"
              className="custom-range"
              max="100"
              onChange={e => this.handleChange(e)}
            />
          </div>
        </div>
        <div className="col-lg-12 d-flex justify-content-center">
          <div className="col-lg-8 justify-content-center">
            <button id="brightness" className="btn btn-primary" onClick={e => this.handleClick(e)}>
              Brightness
            </button>
            <button id="noise" className="btn btn-primary" onClick={e => this.handleClick(e)}>
              Noise
            </button>
            <button id="sepia" className="btn btn-primary" onClick={e => this.handleClick(e)}>
              Sepia
            </button>
            <button id="contrast" className="btn btn-primary" onClick={e => this.handleClick(e)}>
              Contrast
            </button>
            <button id="color" className="btn btn-primary" onClick={e => this.handleClick(e)}>
              Colorize
            </button>
            <button id="vintage" className="btn btn-primary" onClick={e => this.handleClick(e)}>
              Vintage
            </button>
            <button id="lomo" className="btn btn-primary" onClick={e => this.handleClick(e)}>
              Lomo
            </button>
            <button id="emboss" className="btn btn-primary" onClick={e => this.handleClick(e)}>
              Emboss
            </button>
            <button id="tiltshift" className="btn btn-primary" onClick={e => this.handleClick(e)}>
              Tilt Shift
            </button>
            <button id="radialblur" className="btn btn-primary" onClick={e => this.handleClick(e)}>
              Radial Blur
            </button>
            <button id="edgeenhance" className="btn btn-primary" onClick={e => this.handleClick(e)}>
              Edge Enhance
            </button>
            <button id="posterize" className="btn btn-primary" onClick={e => this.handleClick(e)}>
              Posterize
            </button>
            <button id="clarity" className="btn btn-primary" onClick={e => this.handleClick(e)}>
              Clarity
            </button>
            <button id="orangepeel" className="btn btn-primary" onClick={e => this.handleClick(e)}>
              Orange Peel
            </button>
            <button id="sincity" className="btn btn-primary" onClick={e => this.handleClick(e)}>
              Sin City
            </button>
            <button id="sunrise" className="btn btn-primary" onClick={e => this.handleClick(e)}>
              Sun Rise
            </button>
            <button id="crossprocess" className="btn btn-primary" onClick={e => this.handleClick(e)}>
              Cross Process
            </button>
            <button id="hazydays" className="btn btn-primary" onClick={e => this.handleClick(e)}>
              Hazy
            </button>
            <button id="love" className="btn btn-primary" onClick={e => this.handleClick(e)}>
              Love
            </button>
            <button id="grungy" className="btn btn-primary" onClick={e => this.handleClick(e)}>
              Grungy
            </button>
            <button id="jarques" className="btn btn-primary" onClick={e => this.handleClick(e)}>
              Jarques
            </button>
            <button id="pinhole" className="btn btn-primary" onClick={e => this.handleClick(e)}>
              Pin Hole
            </button>
            <button id="oldboot" className="btn btn-primary" onClick={e => this.handleClick(e)}>
              Old Boot
            </button>
            <button id="glowingsun" className="btn btn-primary" onClick={e => this.handleClick(e)}>
              Glow Sun
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
