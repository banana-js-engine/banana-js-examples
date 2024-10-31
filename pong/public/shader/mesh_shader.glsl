#version 300 es

in vec3 a_Position;
in vec3 a_Color;
in vec2 a_TexCoord;
in vec3 a_Normal;
in vec3 a_Ambient;
in vec3 a_Diffuse;
in vec3 a_Specular;
in float a_Shininess;

out vec3 v_Color;
out vec2 v_TexCoord;
out vec3 v_Normal;
out vec3 v_Ambient;
out vec3 v_Diffuse;
out vec3 v_Specular;
out float v_Shininess;
out vec3 v_SurfaceToView;

uniform mat4 u_ViewProjectionMatrix;
uniform vec3 u_CameraPosition;

void main() {
    v_Color = a_Color;
    v_TexCoord = a_TexCoord;
    v_Normal = a_Normal;
    v_Ambient = a_Ambient;
    v_Diffuse = a_Diffuse;
    v_Specular = a_Specular;
    v_Shininess = a_Shininess;

    v_SurfaceToView = u_CameraPosition - a_Position.xyz; 

    gl_Position = u_ViewProjectionMatrix * vec4(a_Position, 1.0);
}

#version 300 es

precision mediump float;

in vec3 v_Color;
in vec2 v_TexCoord;
in vec3 v_Normal;
in vec3 v_Ambient;
in vec3 v_Diffuse;
in vec3 v_Specular;
in float v_Shininess;
in vec3 v_SurfaceToView;

out vec4 fragColor;

void main() {
    vec3 lightDirection = normalize(vec3(0.5, 0.7, 1.0));
    vec3 normal = normalize(v_Normal);

    vec3 ambient = vec3(0.2, 0.2, 0.2) * v_Ambient;

    float Kd = max(dot(lightDirection, normal), 0.0);
    
    vec3 diffuse = Kd * v_Diffuse;

    vec3 viewDirection = normalize(v_SurfaceToView);
    vec3 halfVector = normalize(lightDirection + viewDirection);
 
    float fakeLight = dot(lightDirection, normal) * .5 + .5;
    float specularLight = clamp(dot(normal, halfVector), 0.0, 1.0);

    float Ks = pow(specularLight, v_Shininess);
    vec3 specular = Ks * v_Specular;

    fragColor.xyz = (ambient + diffuse + specular) * v_Color;
    fragColor.a = 1.0;
}