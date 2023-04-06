function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
   var data = new Date()
   // var hora = data.getHours()
var hora = 11 
 
 
    if (hora >= 19 && hora < 20) {
        img.src = 'foto19h.png'
msg.innerHTML = 'Durante a ceia, - quando o demônio já tinha lançado no coração de Judas, filho de Simão Iscariotes, o propósito de traí-lo, sabendo Jesus que o Pai tudo lhe dera nas mãos, e que saíra de Deus e para Deus voltava, levantou-se da mesa, depôs as suas vestes e, pegando duma toalha, cingiu-se com ela. Em seguida, deitou água numa bacia e começou a lavar os pés dos discípulos e a enxugá-los com a toalha com que estava cingido. Depois de lhes lavar os pés e tomar as suas vestes, sentou-se novamente à mesa e perguntou-lhes: Sabeis o que vos fiz? Vós me chamais Mestre e Senhor, e dizeis bem, porque eu o sou. Logo, se eu, vosso Senhor e Mestre, vos lavei os pés, também vós deveis lavar-vos os pés uns aos outros. Dei-vos o exemplo para que, como eu vos fiz, assim façais também vós. (Jo, 13, 2-5. 12-15)'

    }   else if (hora >= 20 && hora < 21) {
        img.src = 'foto20h.png'
msg.innerHTML = 'Eu sou o pão vivo que desceu do céu. Quem comer deste pão viverá eternamente. E o pão, que eu hei de dar, é a minha carne para a salvação do mundo. Quem come a minha carne e bebe o meu sangue permanece em mim e eu nele. (Jo 6, 51.56) ...como amasse os seus que estavam no mundo, até o extremo os amou... (Jo 13,1) ...Isto é o Meu CORPO, que é dado por vós; ...Este cálice é a Nova Aliança em Meu SANGUE, que é derramado por vós... (Lc 22, 19-20) Durante a refeição, Jesus tomou o pão, benzeu-o, partiu-o e o deu aos discípulos, dizendo: Tomai e comei, isto é Meu CORPO. Tomou depois o cálice, rendeu graças e deu-lho, dizendo: Bebei dele todos, porque isto é Meu SANGUE, o sangue da Nova Aliança, derramado por muitos homens em remissão dos pecados. Digo-vos: doravante não beberei mais desse fruto da vinha até o dia em que o beberei de novo convosco no Reino de Meu Pai. (Mt. 26, 26-29)'
    } 
    
    else if(hora >= 21 && hora < 22) {
        img.src = 'foto21h.png'
msg.innerHTML = 'Retirou-se Jesus com eles para um lugar chamado Getsêmani e disse-lhes: Assentai-vos aqui, enquanto eu vou ali orar. E, tomando consigo Pedro e os dois filhos de Zebedeu, começou a entristecer-se e a angustiar-se. Disse-lhes, então: Minha alma está triste até a morte. Ficai aqui e vigiai comigo. (Mt 26, 36-38)'
    } 
    
    else if(hora >= 22 && hora < 23) {
        img.src = 'foto22h.png'
        msg.innerHTML = 'Meu Pai, se é possível, afasta de mim este cálice! Todavia não se faça o que eu quero, mas sim o que tu queres. (Mt 26, 39) Nos dias de sua vida mortal, dirigiu preces e súplicas, entre clamores e lágrimas, àquele que o podia salvar da morte, e foi atendido pela sua piedade. Embora fosse Filho de Deus, aprendeu a obediência por meio dos sofrimentos que teve. (Hb 5, 5-7)'
        

    } else if(hora >= 23 && hora < 0) {
        img.src = 'foto23h.png'
        msg.innerHTML = '“Judas aproximou-se então de Jesus, abraçou e beijou-o dizendo: ‘Deus te salve, Mestre’. E Jesus disse: ‘Judas, é com um beijo que atraiçoas o Filho do Homem?’. Então os soldados cercaram Jesus e os oficiais, avançando, puseram as mãos em Nosso Senhor.”'
        

    }
    else if(hora >= 0 && hora < 1) {
        img.src = '0h.png'
        msg.innerHTML = 'Como Jesus soubesse tudo o que havia de lhe acontecer, adiantou-se e perguntou-lhes: A quem buscais? Responderam: A Jesus de Nazaré. Sou eu, disse-lhes. Quando lhes disse Sou eu, recuaram e caíram por terra.'
        

    }
    else if(hora >= 1 && hora < 2) {
        img.src = '1h.png'
        msg.innerHTML = 'O sumo sacerdote indagou de Jesus acerca dos seus discípulos e da sua doutrina. Jesus respondeu-lhe: Falei publicamente ao mundo. Ensinei na sinagoga e no templo, onde se reúnem os judeus, e nada falei às ocultas. Por que me perguntas?'

    }
    else if(hora >= 2 && hora < 3) {
        img.src = 'foto2h.png'
        msg.innerHTML = 'Levantaram-se, então, alguns e deram esse falso testemunho contra ele: Ouvimos-lo dizer: Eu destruirei este templo, feito por mãos de homens, e em três dias edificarei outro, que não será feito por mãos de homens. Mas Jesus se calava e nada respondia.'

    }
    else if(hora >= 3 && hora < 4) {
        img.src = 'foto3h.png'
         msg.innerHTML = 'Pouco depois, os que ali estavam aproximaram-se de Pedro e disseram: Sim, tu és daqueles; teu modo de falar te dá a conhecer. Pedro então começou a fazer imprecações, jurando que nem sequer conhecia tal homem. E, neste momento, cantou o galo.'

    }   else if(hora >= 4 && hora < 5) {
        img.src = 'foto4h.png'
         msg.innerHTML = 'Reuniram-se os anciãos do povo, os príncipes dos sacerdotes e os escribas, e mandaram trazer Jesus ao seu conselho. Perguntaram-lhe: Tu és o Filho de Deus? Respondeu: Sim, eu sou. Eles então exclamaram: Temos nós ainda necessidade de testemunho?'

    }
    else if(hora >= 5 && hora < 6 ) {
        img.src = 'foto5h.png'
        msg.innerHTML = 'Da casa de Caifás conduziram Jesus ao pretório. Era de manhã cedo. Pilatos entrou no pretório, chamou Jesus e perguntou-lhe: És tu o rei dos judeus? A tua nação e os sumos sacerdotes entregaram-te a mim. Que fizeste? Respondeu Jesus: O meu Reino não é deste mundo.'

    }
    else if(hora >= 6 && hora < 7) {
        img.src = 'foto6h.png'
         msg.innerHTML = 'E, quando Pilatos soube que era da jurisdição de Herodes, enviou-o a Herodes. Este, porém, com a sua guarda, tratou-o com desprezo, escarneceu dele, mandou revesti-lo de uma túnica branca...'
    }
    else if(hora >= 7 && hora < 8) {
        img.src = 'foto7h.png'
         msg.innerHTML = 'Pilatos disse-lhes: Apresentastes-me este homem como agitador do povo, mas, interrogando-o eu diante de vós, não o achei culpado. Nem tampouco Herodes, pois no-lo devolveu. Portanto, soltá-lo-ei depois de o castigar.'

    }
    else if(hora >= 8 && hora < 9) {
        img.src = 'foto8h.png'
msg.innerHTML = '«Pilatos mandou então flagelar Jesus.Os soldados teceram de espinhos uma coroa e puseram-lha sobre a cabeça e cobriram-no com um manto de púrpura. Aproximavam-se dele e diziam: "Salve, rei dos judeus!". E davam-lhe bofetadas» (Jo 19,1-3). «Os sofrimentos de Jesus tomaram a sua forma histórica concreta, pelo facto de Ele ter sido "rejeitado pelos anciãos, pelos sumos sacerdotes e pelos escribas" (Mc 8, 31), que "O entregaram aos pagãos para ser escarnecido, açoitado e crucificado" (Mt, 20, 19)» (CIC, 572).'
    }   
      else if(hora >= 9 && hora < 10) {
        img.src = 'foto9h.png'
        msg.innerHTML = '«Os soldados do governador conduziram Jesus para o pretório e rodearam-no com todo o pelotão. Arrancaram-lhe as vestes e colocaram-lhe um manto escarlate. Depois, trançaram uma coroa de espinhos, meteram-lha na cabeça e puseram-lhe na mão uma vara. Dobrando os joelhos diante dele, diziam com escárnio: "Salve, rei dos judeus!"» (Mt 27, 27-29). «É o "amor até ao fim" que confere ao sacrifício de Cristo o valor de redenção e reparação, de expiação e satisfação. Ele conheceu-nos e amou-nos a todos no oferecimento da sua vida» (CIC, 616).'

    } else if(hora >= 10 && hora < 11) {
        img.src = 'foto10h'
        msg.innerHTML = 'Pilatos disse aos judeus: Eis o vosso rei! Mas eles clamavam: Fora com ele! Fora com ele! Crucifica-o! Pilatos perguntou-lhes: Hei de crucificar o vosso rei? E gritavam ainda mais forte: Seja crucificado!'

    }
    else if(hora >= 11 && hora < 12) {
        img.src = 'foto11h.png'
msg.innerHTML = '«Passava por ali certo homem de Cirene, chamado Simão, que vinha do campo, pai de Alexandre e de Rufo, e obrigaram-no a que lhe levasse a cruz. Conduziram Jesus ao lugar chamado Gólgota, que quer dizer lugar do crânio» (Mc 15, 21-22). «Aceitando, na sua vontade humana, que se faça a vontade do Pai, Ele aceita a sua morte enquanto redentora, para "suportar os nossos pecados no seu corpo, no madeiro da cruz (1Pe 2, 24)» (CIC, 612).'

    }
    else if(hora >= 12 && hora < 13) {
        img.src = 'foto12h.png'
        msg.innerHTML = ''

    }
    else if(hora >= 13 && hora < 14) {
        img.src = 'foto13h.png'
        msg.innerHTML = 'Quando Jesus viu sua mãe e perto dela o discípulo que amava, disse à sua mãe: Mulher, eis aí teu filho. Depois disse ao discípulo: Eis aí tua mãe. E dessa hora em diante o discípulo a levou para a sua casa.'

    }
    else if(hora >= 14 && hora < 15) {
        img.src = 'foto14h.png'
        msg.innerHTML = '«Chegados que foram ao lugar chamado Calvário, ali o crucificaram, como também os ladrões, um à direita e outro à esquerda. E Jesus dizia: "Pai, perdoa-lhes; porque não sabem o que fazem"... Era quase à hora sexta e em toda a terra houve trevas até a hora nona. Escureceu-se o sol e o véu do templo rasgou-se pelo meio. Jesus deu então um grande brado e disse: "Pai, nas tuas mãos entrego o meu espírito". E, dizendo isso, expirou» (Lc 23, 33-46). "Cristo morreu pelos nossos pecados, segundo as Escrituras (1Co 15, 3)» (CIC, 619).'

    }  else if(hora >= 15 && hora < 16) {
        img.src = 'foto15h.png'
        msg.innerHTML = 'Vieram os soldados e quebraram as pernas do primeiro e do outro, que com ele foram crucificados. Chegando, porém, a Jesus, como o vissem já morto, um dos soldados abriu-lhe o lado com uma lança e, imediatamente, saiu sangue e água.'

    }  else if(hora >= 16 && hora < 17) {
        img.src = 'foto16h.png'
        msg.innerHTML = 'Havia um homem, por nome José, membro do conselho, homem reto e justo. Ele não havia concordado com a decisão dos outros nem com os atos deles. Originário de Arimatéia, cidade da Judéia, esperava ele o Reino de Deus. Foi ter com Pilatos e lhe pediu o corpo de Jesus.'

    }  else if(hora >= 17 && hora < 18) {
        img.src = 'foto17h.png'
             msg.innerHTML = '“No lugar em que ele foi crucificado havia um jardim, e no jardim um sepulcro novo, em que ninguém ainda fora depositado. Foi ali que depositaram Jesus por causa da Preparação dos judeus e da proximidade do túmulo.” (Jo 19, 41-42)'

    }

}


