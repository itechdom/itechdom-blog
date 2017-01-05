# version 120 

// Mine is an old machine.  For version 130 or higher, do 
// in vec4 color ;  
// in vec3 mynormal ; 
// in vec4 myvertex ;
// That is certainly more modern

varying vec4 color ;
varying vec3 mynormal ; 
varying vec4 myvertex ; 

uniform sampler2D tex ; 
uniform int istex ; 
uniform int islight ; // are we lighting. 

// The commented code below hardcodes directions/colors
// Instead we use uniform variables set from opengl
// uniform vec3 lightdirn = vec3 (0.0,0.0,1.0) ; 
// uniform vec4 lightcolor = vec4(1.0,1.0,1.0,1.0) ; 

// Assume light 0 is directional, light 1 is a point light.  
// The actual light values are passed from the main OpenGL program. 
// This could of course be fancier.  My goal is to illustrate a simple idea. 

uniform vec3 light0dirn ; 
uniform vec4 light0color ; 
uniform vec4 light1posn ; 
uniform vec4 light1color ; 

// Now, set the material parameters.  These could be varying and/or bound to 
// a buffer.  But for now, I'll just make them uniform.  
// I use ambient, diffuse, specular, shininess as in OpenGL.  
// But, the ambient is just additive and doesn't multiply the lights.  

uniform vec4 ambient ; 
uniform vec4 diffuse ; 
uniform vec4 specular ; 
uniform float shininess ; 

vec4 ComputeLight (const in vec3 direction, const in vec4 lightcolor, const in vec3 normal, const in vec3 halfvec, const in vec4 mydiffuse, const in vec4 myspecular, const in float myshininess) {

	float nDotL = dot(normal, direction)  ;         
	vec4 lambert = mydiffuse * lightcolor * max (nDotL, 0.0) ;  

	float nDotH = dot(normal, halfvec) ; 
	vec4 phong = myspecular * lightcolor * pow (max(nDotH, 0.0), myshininess) ; 

	vec4 retval = lambert + phong ; 
	return retval ;            
}       

void main (void) 
{       
	if (istex > 0) gl_FragColor = texture2D(tex, gl_TexCoord[0].st) ; 
	else if (islight == 0) gl_FragColor = color ; 
	else { 
		// They eye is always at (0,0,0) looking down -z axis 
		// Also compute current fragment position and direction to eye 

		const vec3 eyepos = vec3(0,0,0) ; 
		vec4 _mypos = gl_ModelViewMatrix * myvertex ; 
		vec3 mypos = _mypos.xyz / _mypos.w ; // Dehomogenize current location 
		vec3 eyedirn = normalize(eyepos - mypos) ; 

		// Compute normal, needed for shading. 
		// Simpler is vec3 normal = normalize(gl_NormalMatrix * mynormal) ; 
		vec3 _normal = (gl_ModelViewMatrixInverseTranspose*vec4(mynormal,0.0)).xyz ; 
		vec3 normal = normalize(_normal) ; 

		// Light 0, directional
		vec3 direction0 = normalize (light0dirn) ; 
		vec3 half0 = normalize (direction0 + eyedirn) ; 
		vec4 col0 = ComputeLight(direction0, light0color, normal, half0, diffuse, specular, shininess) ;

		// Light 1, point 
		vec3 position = light1posn.xyz / light1posn.w ; 
		vec3 direction1 = normalize (position - mypos) ; // no attenuation 
		vec3 half1 = normalize (direction1 + eyedirn) ;  
		vec4 col1 = ComputeLight(direction1, light1color, normal, half1, diffuse, specular, shininess) ;

		gl_FragColor = ambient + col0 + col1 ; 
	}
}
