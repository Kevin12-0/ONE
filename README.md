# ONE

ORACLE ONE

<h1> Curosos de oracle</h1>

<p>Parara la ejecucion no se nesecita ninguna instalacion </p>

<h1>Comandos de Git</h1>

<h2> configuracion inicial </h2>
```cmd
git config --global user.name 'Usuario'
```
```cmd
git config --global user.email 'Usuario'
```
* el correo debe ser el mismo de tu cuenta de github

## Listar carpetas en git

```
ls
```

## acceder a carpetas en git

```
cd (Carpeta_Name)
```

## Regresar a la carpeta anterior

```
cd ..
```

## Clonar Repositorio de GitHub

```
git clone url-repositorio
```

- clona el repo (carpetas y archivos)

## Log

```
git log -p
```

- visualizar los cambios hechos historicamente al repopsitorio

## verificar las actualizazciones

```
git pull
```

## estado de nuestro proyecto

```
git status
```

## agaregar archico

```
git add .
```

## comit a git

```
git commit -m "Descripcion"
```

## agragar cambios

```
git push
```

- diff: cambios en un archivo

## Diff

```
git diff nombre_archivo
```

## restarurar archivo

```
git restore --source fd8077d nombre_archivo
```

# Crear una rama a proyecto

```
git checkout -b nombre_rama
```

## Ver las ramas de un proyecto

```
git branch
```

## cambiar de rama

```
git switch nombre_rama
```

# Juntar las verciones de git

1. dirigirce al main

```
git switch main
```

2. hacer merge con la rama donde se hicieron los cambios

```
git merge nombre_rama
```

3. mandar los cambios a github

```
git push origin main
```
