import { usePerson } from '../hooks/usePerson.hook';

function PessoaView({ className }) {

  const [person] = usePerson();

  return (

    <div className={className}>
      Pessoa &eacute; <strong><span id="pessoa">{person.nome} cadastrada com sucesso</span></strong> 
    </div>
  );
}

export default PessoaView;
