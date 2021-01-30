FROM node

RUN git clone -l https://github.com/hugo-arenas/PEP3_MINGESO
WORKDIR /mnt
RUN mkdir c 
WORKDIR /c
RUN mkdir windows
WORKDIR /windows
RUN mkdir system32
WORKDIR /system32
RUN mkdir config
WORKDIR /config
RUN mkdir systemprofile
WORKDIR /systemprofile
RUN mkdir appdata
WORKDIR /appdata
RUN mkdir local
WORKDIR /local
RUN mkdir jenkins
WORKDIR /jenkins
RUN mkdir .jenkins
WORKDIR /.jenkins
RUN mkdir workspace
WORKDIR /workspace
RUN mkdir proyecto_app
WORKDIR /proyecto_app
WORKDIR /PEP3_MINGESO
COPY . /mnt/c/windows/system32/config/systemprofile/appdata/local/jenkins/.jenkins/workspace/proyecto_app
WORKDIR /mnt/c/windows/system32/config/systemprofile/appdata/local/jenkins/.jenkins/workspace/proyecto_app
RUN ls
RUN npm install -g npm@7.5.0
RUN npm start