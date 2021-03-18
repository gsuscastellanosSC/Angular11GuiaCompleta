# Angular 11 - La Guia Completa + 15 Proyectos
    https://www.udemy.com/course/angular-10-fundamentos-8-app/learn/lecture/20783856?start=15#overview
# Class#1
    1. Instalaciones necesarias
         node --version
         ng --version
# Class#2
    2. Hola Mundo
        ng -help
        ng new helloWorld
        install in vs:
            vscode-icons
            eslint
        ng serve --o
# Class#3
    3. Estructura de Carpetas
# Class#4
    4. Qué es Angular?
        * Angular != AngularJS
        * Framework para crear SPA
        * Es opensource y desarrollado por Google
        * Separación total de FrontEnd y BackEnd
        * Utiliza el patrón MVC
        * Está basado en TypeScript
        * Está basado en componentes
        * Utiliza el Angular-CLI
        * Es un framework completo
        * Cada 6 meses libera nuevas versiones
            X.Y.Z
            | | |
        * Está basada en la biblioteca RxJS
        * Es amigable con Ionic y NativeScript(Aplicaciones móviles híbridas)
        * Angular Universal
# Class#5      
    5. Configuración bootstrap mediante CDN y NPM
        index.html:
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        npm install bootstrap@next
        styles.css:
            @import '~bootstrap/dist/css/bootstrap.min.css';
# Class#6
    6. ¿Qué es el Databinding?
# Class#7
    7. Interpolación
# Class#8
    8. Property Binding
# Class#9
    9. Event Binding
# Class#10
    10. Two Way Data Binding
# Class#11
    11. ¿Qué son las Directivas?
        Son elementos que nos permite modificar el comportamiento del DOM
        Directivas:
            * Componente
            * Atributo
                * ngClass
                * ngStyle
            * Estructurales
                * nglf
                * ngFor
                * ngSwitch
# Class#12
    12. *ngFor
# Class#13
    13. *ngIf
# Class#14
    14. ngStyle
# Class#15
    15. ngClass
# Class#16
    16. *ngSwitch
# Class#17
    17. Que vamos a hacer?
# Class#18
    18. Configuración Bootstrap - Agregamos sonidos al proyecto
# Class#19
    19. Piano HTML
# Class#20
    20. Emitir Sonido
# Class#21    
    21. Deploy a Netifly
        ng build --prod
# Class#22
    22. Descarga del proyecto - npm install
        npm install
# Class#23    
    23. Que vamos a hacer?
# Class#24
    24. Dados HTML
# Class#25
    25. Dados -Random() - Parte 1
# Class#26
    26. Dados - Random() - Parte 2
# Class#27
    27. Deploy
        ng build --prod
# Class#28
    28. Qué es un Componente?
        ng generate component nameComponent
        ng g c nameComponent
# Class#29
    29. Creando Componente Manualmente
        Create: 
            folder nameComponet
            File:
                nameComponet.component.ts:
                    import { Component } from '@angular/core';
                    @Component({
                    selector: 'app-nameComponet',
                    templateUrl: 'nameComponet.component.html',
                    styleUrls: ['nameComponet.component.css']
                    })
                    export class DasboardManualComponent {
                    }
                nameComponet.componet.css
                    #css
                nameComponet.componet.html
                    <!-- html  -->
        2. include component in app.module.ts
            @NgModule({
                declarations: [
                AppComponent,
                nameComponet1,
                nameComponet2,
                .
                .
                .
                nameComponetN
            ],
            .
            .
            .
# Class#30
    30. Creando Componentes a través del Angular CLI Parte 1
            ng generate component nameComponent
            ng g c nameComponent
            ng g c --help
# Class#31
    31. Creando Componentes a través del Angular CLI Parte 2
        ng g c nameComponet/sonNameComponet
# Class#32
    32. ¿Qué vamos a hacer? y Creación del proyecto
        ng new tareas
# Class#33
    33. Creación de componentes - Trabajando en el HTML
# Class#34
    34. Imagen de fondo y estilos CSS
# Class#35
    35. Agregar Tarea - Parte 1
# Class#36
    36. Agregar Tarea - Parte 2
# Class#37    
    37. Agregamos font awesome y iconos
# Class#38
    38. Eliminar Tarea
# Class#39
    39. Actualizar Tarea
# Class#40
    40. Deploy
        ng build --prod
# Class#41
    41. Que vamos a hacer? - Creación del proyecto
# Class#42    
    42. Creación de componentes - Navbar HTML
        ng generate component componets/convertidor
# Links
    Fontawesome:
        https://fontawesome.com/start/
    Pixabay:
        https://pixabay.com/es/
    Netlify:
        https://www.netlify.com/
    Bootstrap:
        https://getbootstrap.com/
    Angular 9: Estructura de carpetas para una aplicación escalable:
        https://medium.com/williambastidasblog/angular-9-estructura-de-carpetas-de-para-una-aplicaci%C3%B3n-escalable-a34ab5dd6aaa
    How install node js:
        https://nodejs.dev/
    How install angular CLI:
        https://cli.angular.io/  
