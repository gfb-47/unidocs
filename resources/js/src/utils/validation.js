/**
 * @param {string} message 
 * @returns 
 */
export function getDateValidation(message) {
  return {
    required: message,
    pattern: {
      value: /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}/i,
      message: 'formato de data invalido.'
    }
  }
}

export const emailValidation = {
  required: 'É necessário informar um email para continuar.',
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: 'Endereço de email invalido.'
  }
}

export const phoneValidation = {
  required: 'O campo telefone não pode ficar vazio.',
  pattern: {
    value: /^\([0-9]{2}\) [0-9]{1} [0-9]{4}-[0-9]{4}/i,
    message: 'Endereço de telefone invalido.'
  }
}

export const cpfValidation = {
  required: 'O campo cpf não pode ficar vazio.',
  pattern: {
    value: /^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}/i,
    message: 'cpf em formato invalido.'
  }
}

export const nameValidation = {
  required: 'O campo nome não pode ficar vazio.'
}

export const titleValidation = {
  required: 'O campo título não pode ficar vazio.'
}

export const localValidation = {
  required: 'O campo local não pode ficar vazio.'
}

export const noteValidation = {
  required: 'O campo local não pode ficar vazio.'
}

export const juryValidation = {
  validate: (arr) => !(arr.length < 3) || "Voce precisa selecionar 3 professores" ,
}

export const autoCompleteValidation = {
  required: 'Por favor efetue a pesquisa e selecione uma opção'
}

export const descriptionValidation = {
  required: 'O campo Descrição não pode ficar vazio.'
}

export const lastnameValidation = {
  required: 'O campo sobrenome não pode ficar vazio.'
}

export const justifyValidation = {
  required: 'O campo justificativa não pode ficar vazio.'
}

export const ratingValidation = {
  required: 'O campo nota não pode ficar vazio.',
  min: 0,
  max: 10
}

export const passwordValidation = {
  required: 'Informe uma senha.',
  minLength: {
    value: 8,
    message: 'A senha precisa ter no mínimo 8 caracteres.'
  }
}

export const passwordConfirmValidation = {
  required: 'Confirme sua senha.',
  confirmed: 'Esse campo não coincide com a senha informada'
}

export const dateValidation = getDateValidation('Você precisa informar uma data válida.')
export const hourValidation = {
  required: 'Você precisa informar a hora',
  pattern: {
    value: /^[0-9]{2}:[0-9]{2}/i,
    message: 'formato de hora invalido.'
  }
}