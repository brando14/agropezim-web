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

- Se encuentran todo los templates que van a ser usados.

-  El styles.css ubicado en la carpeta css, es lo que yo estoy editando.

-  para subir  los cambios cada vez que los hagas:

```
aws s3 sync .  s3://testagropezim --acl public-read
```

- Link de Agropezim-test:


```
https://testagropezim.s3.us-east-2.amazonaws.com/index.html

```
