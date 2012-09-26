var local = "Caelum Ensino e Inovação";
      console.log(typeof(local));
      console.log(local.length);
      console.dir(local);
      var sala = new String(144);
      console.log(typeof(sala));
      console.log(sala.valueOf());
      console.dir(sala);
      console.log(local.replace(/ino/ig, "BANG!"));
      
      var onze = "011";
      console.log(parseInt(onze, 10) + 3);
      console.log(0xe12);
      console.log(2 + 2 * 10 - 8);
      var msg = 2012;
      console.log(msg);
      console.log(msg += 8);
      
      console.log(2 == "2");
      console.log(2 === "3");
      console.log(2 != "2");
      
      if(msg == 2020) console.log("O ano eh 2020");
      // tem que ser diferente de 0, false, NaN, undefined, null, void
      if(2 + 2) console.log("Tem resultado");
      if(2 - 2) console.log("Tem resultado");
      
      var aula = 0;
      if(!aula) console.log("Sem aula");
      
      var turma = ["Mônica", "Cebolinha", "Cascão"];
      console.log(turma[1]);
      turma.push("Magali");
      turma.unshift("Pelezinho");
      console.log(turma);
      console.log(turma.pop());
      console.log(turma);
      console.log(turma.pop());
      console.log(turma);
      
      var curso = {
          curso: "WD-47",
          sala: 144,
          turma: turma,
          duracao: 20
      };
      
      console.log("Sala do curso: " + curso.sala);
      turma.push("Chico Bento");
      console.log("Turma: " + curso.turma);
      
      function roda(){
        var curso = "wd-47";
        console.log(curso);
        teste = "Global";
      }
      
      console.log(curso);
      roda();
      console.log(teste);
      
      global = "Teste";
      
      function testeGlobal(){
        console.log(global);
      }
      
      testeGlobal();
      
      var teste = function testeGlobal(){
        console.log(global);
      }
      
      testeGlobal();
      
      function Turma(){
        var alunos = [];
        var adicionaAluno = function(){
          alunos.push("Chico Bento");
        }
        adicionaAluno();
        return alunos;
      }
      
      console.log(Turma());
      console.log(Turma().length);
      
      function dizNome(nome){
        return nome;
      }
      
      var instrutor = dizNome("Gabriel");
      console.log(instrutor);
      
      function bomba(){
        return "Booom!!!";
      }
      
      function bomba(){
        console.log(arguments);
        if(arguments[0] != undefined){
          console.log("Booom * " + arguments[0]);
        }else{
          console.log("Booom!!!");
        }
      }
      
      bomba();
      bomba("nuclear");
      
      //closure
      function configura(){
        var teste = 10;
        return function(x, y){
          console.log(x + (teste + y));
        }
      }
      
      var objeto = configura();
      objeto("oi ", 2);
      objeto("mas ", 4);
      
      var meuScript = {
        nome: "Caelum",
        fala: function(){
          console.log("Olá!!!");
        }
      };
      
      meuScript.fala();
    </script>