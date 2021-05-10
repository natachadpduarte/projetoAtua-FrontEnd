import { User } from "./User"


export class Fenix {

    public id: number
    public extracao: Date
    public origem: string
	public datainput: Date
	public numparcela: string
    public autorcadastro: string
	public nomecliente: string
	public telefones: string
	public gc: string
    public endereco: string
	public estado: string 
	public num: string
	public descricaocontrato: string
	public cpf: string
	public cnpj: string
	public cep: string
	public bairro: string
	public cidade: string
	public tipocomercio: string
	public atividadeprincipalempresa: string
	public tipoempresa: string
	public nomefantasiaempresa: string
	public ruaempresa: string
	public complempresa: string
	public numempresa: string
	public porteempresa: string
	public cnaeempresa: string 
	public razaosocialempresa: string 
	public capsocialempresa: string 
	public situacaoempresa: string 
	public emailempresa: string 
	public naturezajuridica: string 
	public dataaberturaempresa: string 
	public valoremprestimo: number 
	public parcelas: number 
	public valorparcela: number
	public datainicio: Date 
	public taxajuros: number
	public cet: number
	public tiporecebimento: string 
	public dataprimeropgt: Date 
	public numerocontrato: number
	public chavebaixaparcela: string 
	public chave: string 
	public ordemparcela: number
	public datavencimento: Date 
	public diasematraso: string 
	public diadasemana: string 
	public valorparcelaatualizado: number
	public valorpagopelocliente: number
	public datadepagamento: Date 
	public houverecebimento: string 
	public cccredito: number 
	public ccdebito: number 
	public saldocorrente: number
	public status: string 
	public situacao: string 
	public rota: string 
	public operacao: string 
	public lucroesperado: string 
	public tipopagamento: string 
	public lucroporparcela: number
	public valordisponibilizado: number 
	public agentecobranca: string 
	public aprovacaopagamento: string 
    public usuario: User
    
}