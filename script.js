function buscacep(){
    
    let cep = document.getElementById("cepinput")
    if(cep.value !== ""){
      let url = "https://brasilapi.com.br/api/cep/v1/" + cep.value;

      let req = new XMLHttpRequest();
      req.open("GET", url);
      req.send();

      req.onload = function(){
        if(req.status === 200){
            let endereco = JSON.parse(req.response);
             document.getElementById("ruainput").value = endereco.street;
             document.getElementById("estadoinput").value = endereco.state;
             document.getElementById("bairroinput").value = endereco.neighborhood;
             document.getElementById("cidadeinput").value = endereco.city;
             console.log("batata")
        }
      }


      

    }

   

}

window.onload = function(){
            let cep = document.getElementById("cepinput")
            cep.addEventListener("blur", buscacep);
            
        }

let contrato = document.getElementById("contrato")


let form = document.getElementById("form")


    function enviar(){

form.style.display = "none";
setTimeout(() =>{
    //window.print()
},200)

    }

String.prototype.extenso = function(c){
    var ex = [
        ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"],
        ["dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"],
        ["cem", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"],
        ["mil", "milhão", "bilhão", "trilhão", "quadrilhão", "quintilhão", "sextilhão", "setilhão", "octilhão", "nonilhão", "decilhão", "undecilhão", "dodecilhão", "tredecilhão", "quatrodecilhão", "quindecilhão", "sedecilhão", "septendecilhão", "octencilhão", "nonencilhão"]
    ];
    var a, n, v, i, n = this.replace(c ? /[^,\d]/g : /\D/g, "").split(","), e = " e ", $ = "real", d = "centavo", sl;
    for(var f = n.length - 1, l, j = -1, r = [], s = [], t = ""; ++j <= f; s = []){
        j && (n[j] = (("." + n[j]) * 1).toFixed(2).slice(2));
        if(!(a = (v = n[j]).slice((l = v.length) % 3).match(/\d{3}/g), v = l % 3 ? [v.slice(0, l % 3)] : [], v = a ? v.concat(a) : v).length) continue;
        for(a = -1, l = v.length; ++a < l; t = ""){
            if(!(i = v[a] * 1)) continue;
            i % 100 < 20 && (t += ex[0][i % 100]) ||
            i % 100 + 1 && (t += ex[1][(i % 100 / 10 >> 0) - 1] + (i % 10 ? e + ex[0][i % 10] : ""));
            s.push((i < 100 ? t : !(i % 100) ? ex[2][i == 100 ? 0 : i / 100 >> 0] : (ex[2][i / 100 >> 0] + e + t)) +
            ((t = l - a - 2) > -1 ? " " + (i > 1 && t > 0 ? ex[3][t].replace("ão", "ões") : ex[3][t]) : ""));
        }
        a = ((sl = s.length) > 1 ? (a = s.pop(), s.join(" ") + e + a) : s.join("") || ((!j && (n[j + 1] * 1 > 0) || r.length) ? "" : ex[0][0]));
        a && r.push(a + (c ? (" " + (v.join("") * 1 > 1 ? j ? d + "s" : (/0{6,}$/.test(n[0]) ? "de " : "") + $.replace("l", "is") : j ? d : $)) : ""));
    }
    return r.join(e);
}

let sidebar = document.querySelector(".sidebar")
let sidebarli = document.querySelectorAll(".sidebar li")
let arr = []
for(i=0;i<=sidebarli.length-1; i++){
    sidebarli[0].classList.add("active")
    arr.push(sidebarli[i])
}

arr.map((item) =>{
    
    item.addEventListener("click", () =>{
        
        for(i=0;i<=arr.length-1; i++){
            arr[i].classList.remove("active")
            arr[i].classList.add("desactive")
            
        }
        item.classList.remove("desactive")
        item.classList.add("active")
        

    })
})

let logo = document.getElementById("logo")
let closebar = document.querySelector(".closebar")
sidebar.classList.add("expandbar")
closebar.addEventListener("click", () =>{
    
    if(sidebar.className == "sidebar expandbar"){
        sidebar.classList.remove("expandbar")
        sidebar.classList.add("minifybar")
        closebar.innerHTML = '<i class="fa-solid fa-caret-right"></i>'
        logo.style.opacity = "0"
        
    } else if(sidebar.className == "sidebar minifybar"){
        sidebar.classList.add("expandbar")
        sidebar.classList.remove("minifybar")
        closebar.innerHTML = '<i class="fa-solid fa-caret-left"></i>'
        logo.style.opacity = "1"
        
        
        
        
    }
    
})

let formadepagamento3 = document.getElementById("selecionarformadepagamento")
let quantidadedeparcelas = document.getElementById("quantidadeparcelas")
let parcelas = document.querySelectorAll(".parcelas")

           
formadepagamento3.addEventListener("click", () =>{

    if(formadepagamento3.value == "cartão de crédito"){
        quantidadedeparcelas.style.display = "block"
       

     
        }else{
            quantidadedeparcelas.style.display = "none"
        }


});



let comercialsection = document.querySelector(".comercialsection")
let institucionalsection = document.querySelector(".institucionalsection")
let eccomerce = document.querySelector(".eccomercesection")
let contracttitle = document.querySelector(".contracttitle")
let eccomercecheck = document.getElementById("eccomercecheck")
let comercialcheck = document.getElementById("comercialcheck")
let institucionalcheck = document.getElementById("institucionalcheck")


comercialsection.addEventListener("click", () =>{
    comercialcheck.checked = true
    eccomercecheck.checked = false
    form.classList.remove("saida")
    form.classList.remove("saida2")
    contracttitle.innerText = comercialsection.innerText
    
  
    form.classList.toggle("entrada")
    
    
    
})



eccomerce.addEventListener("click", () =>{
    comercialcheck.checked = false
    eccomercecheck.checked = true
    form.classList.remove("entrada")
    form.classList.remove("saida2")
    form.classList.toggle("saida")
    contracttitle.innerText = eccomerce.innerText
    
    
})


institucionalsection.addEventListener("click", () =>{
    form.classList.remove("saida")
    form.classList.remove("entrada")
    contracttitle.innerText = institucionalsection.innerText
    
  
    form.classList.toggle("saida2")
    
    
    
})



let variavelcnpj = document.querySelector(".variavelcnpj")
let variavelcpf = document.querySelector(".variavelcpf")


let contratanteinput = document.getElementById("contratanteinput")
let contratante = document.getElementById("contratante")
let formadepagamentoselecionada = document.getElementById("selecionarformadepagamento")

let rua = document.getElementById("rua")
let cnpj = document.getElementById("cnpj")
let num = document.getElementById("num")
let bairro = document.getElementById("bairro")
let cidade = document.getElementById("cidade")
let cep = document.getElementById("cep")
let rg = document.getElementById("rg")
let cpf = document.getElementById("cpf")
let representante = document.getElementById("representante")
let datainicial = document.getElementById("datainicial")
let datafinal = document.getElementById("datafinal")
let valorcontrato = document.getElementById("valorcontrato")
let valorextenso = document.getElementById("valorextenso")
let formadepagamento = document.getElementById("formadepagamento")
let formadepagamento2 = document.getElementById("formadepagamento2")
let numeropix = document.getElementById("numeropix")

let ruainput = document.getElementById("ruainput")
let representanteinput = document.getElementById("representanteinput")
let cnpjinput = document.getElementById("cnpjinput")
let numinput = document.getElementById("numinput")
let bairroinput = document.getElementById("bairroinput")
let cidadeinput = document.getElementById("cidadeinput")
let cepinput = document.getElementById("cepinput")
let cpfinput = document.getElementById("cpfinput")
let rginput = document.getElementById("rginput")
let datainicialinput = document.getElementById("datainicialinput")
let datafinalinput = document.getElementById("datafinalinput")
let valorcontratoinput = document.getElementById("valorcontratoinput")


let contratoeccomerce = document.querySelector(".eccomerceconteudo")
let resultado = document.getElementById("resultado")
let gerar = document.getElementById("gerar")

let cnpjdocontratado = document.getElementById("cnpjdocontratado")
let nomefantasia = document.getElementById("nomefantasia")
let nomecontratado = document.getElementById("nomecontratado")
let contrato2 = document.getElementById("contrato2")




function openInNewTab(href) {
    Object.assign(document.createElement('a'), {
      target: '_blank',
      rel: 'noopener noreferrer',
      href: href,
    }).click();
  }





gerar.addEventListener("click", () =>{
    
  resultado.style.visibility = "hidden"



    contrato.style.display = "none"
    

    setTimeout(() =>{

        form.remove()

        var html = document.documentElement.outerHTML;

        // Cria um novo objeto Blob com o conteúdo HTML
        var blob = new Blob(['\ufeff', html], {
          type: 'application/msword'
        });
        
        // Cria um link para baixar o arquivo
        var link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'Nome do seu arquivo.doc';
        
        // Adiciona o link à página e clica nele para iniciar o download
        document.body.appendChild(link);
        
        
        // Remove o link da página
        document.body.removeChild(link);
        
        
        link.click();
        
    },0)


    setTimeout(() =>{
        let agradecimento = document.getElementById("agradecimento")
        agradecimento.innerHTML = `<img src="gif.gif">
        <h2>CONTRATO GERADO COM SUCESSO!</h2>
        <button onclick="voltar()" class="voltar"></i>GERAR NOVO CONTRATO<i class="fa-solid fa-file-contract"></i></button>`

        let corpo = document.getElementById("corpo")   
        agradecimento.style.display = "unset"

    },500)

    
   


    

   
   
    
if(formadepagamento3.value == "cartão de crédito"){
    for(i=0;i<=parcelas.length-1;i++){
        parcelas[i].innerHTML = ` ${quantidadedeparcelas.value} <b>(vezes)</b> sem juros`
    }
    
  }
    
    sidebar.style.display = "none"



  if(cnpjinput.value == ""){
    variavelcnpj.innerText = `inscrito(a) no CPF nº ${cpfinput.value}`
    variavelcpf.style.display = "none"
    cnpjdocontratado.innerText = `CPF: ${cpfinput.value}`
    
  }else{
    cnpjdocontratado.innerText = `CNPJ: ${cnpjinput.value}`
  }

    let estado = document.getElementById("estadoinput")
    let valoremstring = valorcontratoinput.value
    contratante.innerText = contratanteinput.value
    cnpj.innerText = cnpjinput.value
    rua.innerText = ruainput.value
    num.innerText = numinput.value
    bairro.innerText = bairroinput.value
    cidade.innerText = `${cidadeinput.value}/${estado.value}`
    cep.innerText = cepinput.value
    rg.innerText = rginput.value
    cpf.innerText = cpfinput.value
    datainicial.innerText = datainicialinput.value.split('-').reverse().join('/');
    datafinal.innerText = datafinalinput.value.split('-').reverse().join('/');
    valorcontrato.innerText = valorcontratoinput.value;
    formadepagamento.innerText = formadepagamentoselecionada.value
    formadepagamento2.innerText = formadepagamentoselecionada.value
    nomecontratado.innerText = contratanteinput.value
    
    representante.innerText = representanteinput.value
    

    let valordata = datainicialinput.value.split('-').reverse().join('/')
    let mes = document.querySelector(".mes")
     let dia = document.querySelector(".dia")
     var data = new Date();
     var mesdoano = String(data.getMonth() + 1).padStart(2, '0');
     var diadoano = String(data.getDate()).padStart(2, '0');
     mesdoano == 11 ? mesdoano = "novembro" : "" 
     mesdoano == 1 ? mesdoano = "janeiro" : "" 
     mesdoano == 2 ? mesdoano = "fevereiro" : "" 
     mesdoano == 3 ? mesdoano = "março" : "" 
     mesdoano == 4 ? mesdoano = "abril" : "" 
     mesdoano == 5 ? mesdoano = "maio" : "" 
     mesdoano == 6 ? mesdoano = "junho" : "" 
     mesdoano == 7 ? mesdoano = "julho" : "" 
     mesdoano == 8 ? mesdoano = "agosto" : ""
     mesdoano == 9 ? mesdoano = "setembro" : "" 
     mesdoano == 10 ? mesdoano = "outubro" : "" 
     mesdoano == 12 ? mesdoano = "dezembro" : ""  
     console.log(mesdoano)
     dia.innerText = diadoano
     mes.innerText = mesdoano
     
     
   
     valorextenso.innerText = valoremstring.extenso(true)
      let convertido = Number(valorcontratoinput.value)
       if(convertido > 999 && convertido < 2000){
        let valorextensoguardado = valorextenso.innerText;
        let retirado = valorextensoguardado.substring(3)
        valorextenso.innerText = retirado
       }
       if(formadepagamentoselecionada.value != "pix"){
        numeropix.style.display = "none"
       }
       if(eccomercecheck.checked == true){
        let tipodocontrato = document.querySelector(".tipodocontrato")
        let clausulaprimeiravariavel = document.querySelector(".clausulaprimeiravariavel")
        let variavelitemA = document.querySelector(".variavelitemA")
        let variavelitemD = document.querySelector(".variavelitemD")
        let diasuteis = document.querySelector(".diasuteis")
        let recisaodecontrato= document.querySelector(".recisaodecontrato")
        let alteracaodoprojeto= document.querySelector(".alteracaodoprojeto")
        alteracaodoprojeto.innerHTML = "Parágrafo único. A <b>CONTRATANTE</b> após receber a apresentação do projeto, poderá solicitar alterações apenas uma vez. Para as alterações futuras será cobrado o valor de R$ 100,00 (cem reais) por hora para o desenvolvimento."
        recisaodecontrato.innerHTML = "A <b>CONTRATANTE</b> poderá rescindir o presente contrato de pleno direito durante 7 dias após assinatura do contratato, tendo os valores pagos reembolsáveis. Após esse periodo a <b>CONTRATANTE</b> poderá rescindir o presente contrato, porém não haverá devolução do valor pago a <b>CONTRATADA</b>."
        diasuteis.innerText = "28"
        tipodocontrato.innerText = "na loja virtual"
        clausulaprimeiravariavel.innerHTML = "<b>1º -</b> Este contrato tem como objetivo a prestação de serviços de criação de um e-commerce e será desenvolvido consoante os pontos explicados logo abaixo:"
        variavelitemA.innerHTML = "(a) Desenvolver um e-commerce, dinâmico, moderno e objetivo, contando com os últimos recursos tecnológicos, focando na apresentação dos produtos e serviços da <b>CONTRATANTE</b>;"
        variavelitemD.innerHTML =  "(d) A <b>CONTRATADA</b> irá cadastrar até 25 produtos no e-commerce desenvolvido, enviados previamente via link pela <b>CONTRATANTE</b>, onde deverá constar foto, preço e estoque de cada produto.<br><br> (e) Características e Recursos do e-commerce: Layout personalizado de acordo com os padrões da empresa, carrossel de produtos, depoimentos, video, whatsapp flutuante, integração com métodos de envio e meios de pagamentos, integração com redes sociais.<br><br>(f) A <b>CONTRATADA</b> irá fornecer ao <b>CONTRATANTE</b> 1h (uma hora) de treinamento após a conclusão do e-commerce, com propósito de demonstrar como a <b>CONTRATANTE</b> pode realizar a gestão do sistema, a <b>CONTRATANTE</b> também terá 30 dias de suporte via grupo online com a equipe da <b>CONTRATADA</b>."
       }

    resultado.innerHTML = contrato.innerHTML
})

function gerarPdf(){
    var doc = new jsPDF()

    doc.fromHTML(`${contrato.innerHTML}`)

doc.save('a4.pdf')
}



function voltar(){
    location.reload()
}





let inputdiv = document.querySelector(".inputdiv")






contratanteinput.addEventListener("click", () =>{

let fakelabel = document.querySelector(".fakelabel")

fakelabel.style.bottom = "110px"
fakelabel.style.fontSize = "11px"
fakelabel.style.transition = ".2s"
fakelabel.style.color = "rgb(6, 106, 255)"

})






let fakelabel = document.querySelector(".fakelabel")

    contratanteinput.addEventListener("blur", () =>{


        if(contratanteinput.value == ""){


        fakelabel.style.bottom = "79px"
        fakelabel.style.transition = ".2s"
        fakelabel.style.fontSize = "16px"
        fakelabel.style.color = "grey"

        }


    } )
   




cnpjinput.addEventListener("click", () =>{

    let fakelabel2 = document.querySelector(".fakelabel2")
    
    fakelabel2.style.bottom = "110px"
    fakelabel2.style.fontSize = "11px"
    fakelabel2.style.transition = ".2s"
    fakelabel2.style.color = "rgb(6, 106, 255)"
    
    })
    
    
    
    
 
    
    let fakelabel2 = document.querySelector(".fakelabel2")
    
        cnpjinput.addEventListener("blur", () =>{
    
    
            if(cnpjinput.value == ""){
    
    
            fakelabel2.style.bottom = "79px"
            fakelabel2.style.transition = ".2s"
            fakelabel2.style.fontSize = "16px"
            fakelabel2.style.color = "grey"
    
            }
    
    
        } )
       
    
        let fakelabel3 = document.querySelector(".fakelabel3")
        representanteinput.addEventListener("click", () =>{

           
            
            fakelabel3.style.bottom = "110px"
            fakelabel3.style.fontSize = "11px"
            fakelabel3.style.transition = ".2s"
            fakelabel3.style.color = "rgb(6, 106, 255)"
            
            })
            
            
            
            
         
            
            
            
                representanteinput.addEventListener("blur", () =>{
            

                    if(representanteinput.value == ""){
            
            
                    fakelabel3.style.bottom = "79px"
                    fakelabel3.style.transition = ".2s"
                    fakelabel3.style.fontSize = "16px"
                    fakelabel3.style.color = "grey"
            
                    }
            
            
                } )


                let fakelabel4 = document.querySelector(".fakelabel4")

                cepinput.addEventListener("click", () =>{

                    fakelabel4.style.bottom = "110px"
                    fakelabel4.style.fontSize = "11px"
                    fakelabel4.style.transition = ".2s"
                    fakelabel4.style.color = "rgb(6, 106, 255)"
                    
                    })
                    
                    
                        cepinput.addEventListener("blur", () =>{
                    
                            if(cepinput.value != ""){


                            fakelabel5.style.bottom = "110px"
                            fakelabel5.style.fontSize = "11px"
                            fakelabel5.style.transition = ".2s"
                            fakelabel5.style.color = "rgb(6, 106, 255)"

                            fakelabel7.style.bottom = "110px"
                            fakelabel7.style.fontSize = "11px"
                            fakelabel7.style.transition = ".2s"
                            fakelabel7.style.color = "rgb(6, 106, 255)"

                            fakelabel8.style.bottom = "110px"
                            fakelabel8.style.fontSize = "11px"
                            fakelabel8.style.transition = ".2s"
                            fakelabel8.style.color = "rgb(6, 106, 255)"

                            fakelabel9.style.bottom = "110px"
                            fakelabel9.style.fontSize = "11px"
                            fakelabel9.style.transition = ".2s"
                            fakelabel9.style.color = "rgb(6, 106, 255)"
                            
                            }else if(cepinput.value == ""){

                               
                               
                                
                    
                    
                            fakelabel4.style.bottom = "79px"
                            fakelabel4.style.transition = ".2s"
                            fakelabel4.style.fontSize = "16px"
                            fakelabel4.style.color = "grey"
                    
                            }
                    
                    
                        } )



                        let fakelabel5 = document.querySelector(".fakelabel5")

                        

                ruainput.addEventListener("click", () =>{

                    fakelabel5.style.bottom = "110px"
                    fakelabel5.style.fontSize = "11px"
                    fakelabel5.style.transition = ".2s"
                    fakelabel5.style.color = "rgb(6, 106, 255)"
                    
                    })

                    
                    
                    
                        ruainput.addEventListener("blur", () =>{
                    
                    
                            if(ruainput.value == ""){
                    
                    
                            fakelabel5.style.bottom = "79px"
                            fakelabel5.style.transition = ".2s"
                            fakelabel5.style.fontSize = "16px"
                            fakelabel5.style.color = "grey"
                    
                            }
                    
                    
                        } )


                        let fakelabel6 = document.querySelector(".fakelabel6")

                numinput.addEventListener("click", () =>{

                    fakelabel6.style.bottom = "110px"
                    fakelabel6.style.fontSize = "11px"
                    fakelabel6.style.transition = ".2s"
                    fakelabel6.style.color = "rgb(6, 106, 255)"
                    
                    })
                    
                    
                        numinput.addEventListener("blur", () =>{
                    
                    
                            if(numinput.value == ""){
                    
                    
                            fakelabel6.style.bottom = "79px"
                            fakelabel6.style.transition = ".2s"
                            fakelabel6.style.fontSize = "16px"
                            fakelabel6.style.color = "grey"
                    
                            }
                    
                    
                        } )


                        let fakelabel7 = document.querySelector(".fakelabel7")

                bairroinput.addEventListener("click", () =>{

                    fakelabel7.style.bottom = "110px"
                    fakelabel7.style.fontSize = "11px"
                    fakelabel7.style.transition = ".2s"
                    fakelabel7.style.color = "rgb(6, 106, 255)"
                    
                    })
                    
                    
                        bairroinput.addEventListener("blur", () =>{
                    
                    
                            if(bairroinput.value == ""){
                    
                    
                            fakelabel7.style.bottom = "79px"
                            fakelabel7.style.transition = ".2s"
                            fakelabel7.style.fontSize = "16px"
                            fakelabel7.style.color = "grey"
                    
                            }
                    
                    
                        } )


                        let fakelabel8 = document.querySelector(".fakelabel8")

                cidadeinput.addEventListener("click", () =>{

                    fakelabel8.style.bottom = "110px"
                    fakelabel8.style.fontSize = "11px"
                    fakelabel8.style.transition = ".2s"
                    fakelabel8.style.color = "rgb(6, 106, 255)"
                    
                    })
                    
                    
                        cidadeinput.addEventListener("blur", () =>{
                    
                    
                            if(cidadeinput.value == ""){
                    
                    
                            fakelabel8.style.bottom = "79px"
                            fakelabel8.style.transition = ".2s"
                            fakelabel8.style.fontSize = "16px"
                            fakelabel8.style.color = "grey"
                    
                            }
                    
                    
                        } )


                        let estadoinput = document.getElementById("estadoinput")
                        let fakelabel9 = document.querySelector(".fakelabel9")

                estadoinput.addEventListener("click", () =>{

                    fakelabel9.style.bottom = "110px"
                    fakelabel9.style.fontSize = "11px"
                    fakelabel9.style.transition = ".2s"
                    fakelabel9.style.color = "rgb(6, 106, 255)"
                    
                    })
                    
                    
                        estadoinput.addEventListener("blur", () =>{
                    
                    
                            if(estadoinput.value == ""){
                    
                    
                            fakelabel9.style.bottom = "79px"
                            fakelabel9.style.transition = ".2s"
                            fakelabel9.style.fontSize = "16px"
                            fakelabel9.style.color = "grey"
                    
                            }
                    
                    
                        } )


                        let fakelabel10 = document.querySelector(".fakelabel10")

                rginput.addEventListener("click", () =>{

                    fakelabel10.style.bottom = "110px"
                    fakelabel10.style.fontSize = "11px"
                    fakelabel10.style.transition = ".2s"
                    fakelabel10.style.color = "rgb(6, 106, 255)"
                    
                    })
                    
                    
                        rginput.addEventListener("blur", () =>{
                    
                    
                            if(rginput.value == ""){
                    
                    
                            fakelabel10.style.bottom = "79px"
                            fakelabel10.style.transition = ".2s"
                            fakelabel10.style.fontSize = "16px"
                            fakelabel10.style.color = "grey"
                    
                            }
                    
                    
                        } )



                        let fakelabel11 = document.querySelector(".fakelabel11")

                cpfinput.addEventListener("click", () =>{

                    fakelabel11.style.bottom = "110px"
                    fakelabel11.style.fontSize = "11px"
                    fakelabel11.style.transition = ".2s"
                    fakelabel11.style.color = "rgb(6, 106, 255)"
                    
                    })
                    
                    
                        cpfinput.addEventListener("blur", () =>{
                    
                    
                            if(cpfinput.value == ""){
                    
                    
                            fakelabel11.style.bottom = "79px"
                            fakelabel11.style.transition = ".2s"
                            fakelabel11.style.fontSize = "16px"
                            fakelabel11.style.color = "grey"
                    
                            }
                    
                    
                        } )


                        let fakelabel12 = document.querySelector(".fakelabel12")

                valorcontratoinput.addEventListener("click", () =>{

                    fakelabel12.style.bottom = "110px"
                    fakelabel12.style.fontSize = "11px"
                    fakelabel12.style.transition = ".2s"
                    fakelabel12.style.color = "rgb(6, 106, 255)"
                    
                    })
                    
                    
                        valorcontratoinput.addEventListener("blur", () =>{
                    
                    
                            if(valorcontratoinput.value == ""){
                    
                    
                            fakelabel12.style.bottom = "79px"
                            fakelabel12.style.transition = ".2s"
                            fakelabel12.style.fontSize = "16px"
                            fakelabel12.style.color = "grey"
                    
                            }
                    
                    
                        } )









// Remove o link da página
