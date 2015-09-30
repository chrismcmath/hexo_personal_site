var background;
var camera, scene, renderer;
var uniforms;
var clock = new THREE.Clock();

function InitAnimatedBackground() {
    background = document.getElementById('background');

    camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 1000);
    camera.position.z = 4;

    scene = new THREE.Scene();

    var geometry = new THREE.PlaneGeometry(2, 2);

    uniforms = {
        time: { type: "f", value: 1.0 },
        resolution: { type: "v2", value: new THREE.Vector2() }
    };

    var material = new THREE.ShaderMaterial( {
        uniforms: uniforms,
        vertexShader: document.getElementById( 'vertexShader' ).textContent,
        fragmentShader: document.getElementById('fragmentShader').textContent

    } );

    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 0;
    mesh.position.y = 0;
    scene.add( mesh );

    renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setPixelRatio( window.devicePixelRatio );
    background.appendChild( renderer.domElement );

    onWindowResize();

    window.addEventListener( 'resize', onWindowResize, false );

    animate();
}

function onWindowResize( event ) {
    uniforms.resolution.value.x = window.innerWidth;
    uniforms.resolution.value.y = window.innerHeight;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {
    requestAnimationFrame(animate);

    render();
}

function render() {
    var delta = clock.getDelta();
    uniforms.time.value += delta * 5;

    renderer.render(scene, camera);
}
