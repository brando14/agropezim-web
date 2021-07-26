# agropezim-web
Página Web Agropezim Group C.A.


# Escenario de trabajo:

-  Necesitas instalar el aws-cli:  

```
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip

sudo ./aws/install

```

-  Necesitas tener tus claves de AWS.

-  Clonar el repositorio:

```
git clone https://github.com/brando14/agropezim-web

```

- Ir a la carpeta principal:


```
cd agropezim-web/
```

-  El styles. css ubicado en la carpeta css, es lo que yo estoy editando.

-  para subir  los cambios:

```
aws s3 sync .  s3://testagropezim --acl public-read
```
