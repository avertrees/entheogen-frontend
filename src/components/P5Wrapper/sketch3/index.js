// import 'webm-writer'
// import CCapture from '../../../../node_modules/ccapture.js/src/CCapture.js'
// import download from '../../../../node_modules/ccapture.js/src/download.js' // eslint-disable-line
// import '../../../../node_modules/ccapture.js/src/gif.js'
// import '../../../../node_modules/ccapture.js/src/gif.worker.js'
// import '../../../../node_modules/ccapture.js/src/tar.js'
// import '../../../../node_modules/ccapture.js/src/Whammy.js'
// import WebMWriter from '../../../../node_modules/ccapture.js/src/webm-writer-0.2.0.js'

export default function (s) {
    // console.log(s)
    s.props = {}
    console.log("props in function", s)
    // s._colorMode(HSB)
    // console.log(s.props)
    s.onSetAppState = () => { }

    // const FORMAT = 'gif'
    // const WORKERSFOLDER = './'
    // const VERBOSE = false
    // const DISPLAY = true
    // const FPS = 60 
    // const FRAMERATE = FPS 
    // const FRAMELIMIT = 5 * FPS

    // s.capturer = new CCapture({
    //     format: FORMAT, workersPath: WORKERSFOLDER,
    //     verbose: VERBOSE, display: DISPLAY,
    //     framerate: FRAMERATE, frameLimit: FRAMELIMIT
    // });

    // let x, x2, x3,x4,x5;
    // let y, y2, y3,y4,y5;
    // let rad, rad2, rad3,rad4,rad5;
    // let dist, dist2, dist3, dist4, dist5;
    let data = JSON.parse(localStorage.getItem('myData'));
    // console.log(data)
    let i = 0;
    
    let x =0;
    let y =0;
    let x2 = 0; 
    let y2 = 0; 
    let rad = 0;
    let rad2 =0;

    let dist =0;
    let dist2 = 0;
    let x3 = 0;
    let y3 =0;
   
    let x4 =0;
    let y4 =0;
    let rad3 =0;
    let rad4 =0;
    let dist3 = 0;
    let dist4= 0;
   
    let x5 =0;
    let y5 =0;
    let rad5 =0;
    let dist5 =0;
   
    let yIn =0;
    let rotateBy =0;
    let ang =0;
    let incr = 1;
    let deg = 0;
    // let width = 1421
    // let height = 1421
    let width = localStorage.canvasWidth
    let height = localStorage.canvasWidth

    s.setup = function () {
        s.createCanvas(width, height)
        // s.colorMode(HSL)
        s.colorMode("hsb", 360, 100, 100)
        s.background(255, 0, 0)
        // s.noLoop();
        i = 0;
        // s.colorMode("hsb")
        rad = -20;
        rad2 = -20;
        rad3 = -20;
        rad4 = -20;
        rad5 = -20;

        dist = 300;
        dist2 = 350;
        dist3 = 400;
        dist4 = 450;
        dist5 = 500;
        // console.log('::: displayDensity:', s.displayDensity())
        // console.log('::: pixelDensity:', s.pixelDensity())
        console.log('::: help:', data)
        // console.log('::frame', s.frameCount)

        // s.capturer.start();
        // console.table(s.capturer);
    }

    s.draw = function () {
        
            if (s.frameCount % 60 === 1) {
                s.onSetAppState({ frameRate: s.frameRate().toFixed(1) })
            }
            s.noStroke()
            // let deg = 0;
            // let incr = 1;
            let framec = s.frameCount/10
            // s.props.data.delta.length = 2652
            i = parseInt(framec % data.delta.length);
            // console.log(i)
            //i = s.props.slider
            rad = data.delta[i].scaled_rad;

            rad2 = data.theta[i].scaled_rad;
            rad3 = data.alpha[i].scaled_rad;
            rad4 = data.beta[i].scaled_rad;
            rad5 = data.gamma[i].scaled_rad;

            dist = data.delta[i].scaled_dist;
            dist2 = data.theta[i].scaled_dist;
            dist3 = data.alpha[i].scaled_dist;
            dist4 = data.beta[i].scaled_dist;
            dist5 = data.gamma[i].scaled_dist;

            // rad = s.props.data.delta[i].scaled_rad;

            // rad2 = s.props.data.theta[i].scaled_rad;
            // rad3 = s.props.data.alpha[i].scaled_rad;
            // rad4 = s.props.data.beta[i].scaled_rad;
            // rad5 = s.props.data.gamma[i].scaled_rad;

            // dist = s.props.data.delta[i].scaled_dist;
            // dist2 = s.props.data.theta[i].scaled_dist;
            // dist3 = s.props.data.alpha[i].scaled_dist;
            // dist4 = s.props.data.beta[i].scaled_dist;
            // dist5 = s.props.data.gamma[i].scaled_dist;

            s.fill(0, 0, 0, .1)
            s.rect(0, 0, width, height);
            rotateBy += .003;
            s.push();

            s.translate(width / 2, height / 2);
            s.rotate(rotateBy);

            while (deg <= 360) {
                deg += incr;
                ang = s.radians(deg);
                s.fill(280, 100, 100);
                // s.fill(170, 0, 255);
                x = s.cos(ang) * (rad + (dist * s.noise(y / dist, yIn)));
                y = s.sin(ang) * (rad + (dist * s.noise(x / dist, yIn)));
                s.ellipse(x, y, 1.5, 1.5);

                s.fill(220, 100, 100);
                // s.fill(0, 85, 255);
                x2 = s.cos(ang) * (rad2 + (dist2 * s.noise(y2 / dist2, yIn)));
                y2 = s.sin(ang) * (rad2 + (dist2 * s.noise(y2 / dist2, yIn)));
                s.ellipse(x2, y2, 1.5, 1.5);

                s.fill(160, 100, 100);
                // s.fill(0, 255, 170);
                x3 = s.cos(ang) * (rad3 + (dist3 * s.noise(y3 / dist3, yIn)));
                y3 = s.sin(ang) * (rad3 + (dist3 * s.noise(x3 / dist3, yIn)));
                s.ellipse(x3, y3, 1.5, 1.5);

                s.fill(80, 100, 100);
                // s.fill(170, 255, 0);
                x4 = s.cos(ang) * (rad4 + (dist4 * s.noise(y4 / dist4, yIn)));
                y4 = s.sin(ang) * (rad4 + (dist4 * s.noise(y4 / dist4, yIn)));
                s.ellipse(x4, y4, 1.5, 1.5);

                s.fill(10, 100, 100);
                // s.fill(255, 43, 0);
                x5 = s.cos(ang) * (rad5 + (dist5 * s.noise(y5 / dist5, yIn)));
                y5 = s.sin(ang) * (rad5 + (dist5 * s.noise(y5 / dist5, yIn)));
                s.ellipse(x5, y5, 1.5, 1.5);
            }
            deg = 0;
            yIn += .005;
            s.pop();
            // s.capturer.capture(s.canvas);
            // if(i === 60){
            //     s.capturer.save();
            // }
    }
    // p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
    //     if (canvas) //Make sure the canvas has been created
    //         p.fill(newProps.color);
    // }
}
