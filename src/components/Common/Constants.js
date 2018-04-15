
const fields = [
  {
    name: 'initials',
    placeholder: 'ФИО сотрудника',
    validate: {
      required: true,
      type: String
    }
  },
  {
    name: 'position',
    placeholder: 'Должность сотрудника',
    validate: {
      required: true,
      type: String
    }
  },
  {
    name: 'organization',
    placeholder: 'Организация',
    validate: {
      required: true,
      type: String
    }
  },
  {
    name: 'address',
    placeholder: 'Адрес',
    validate: {
      required: true,
      type: String
    }
  }
]

const modalAction = 'добавить'

export const acceptor = {
  fields: [...fields],
  modalAction: `${modalAction}`,
  modalTitle: 'Принимающая сторона:',
  cardTitle: 'Принимает',
  mainAction: 'Добавить принимающего?!'
}

export const sender = {
  fields: [...fields],
  modalAction: `${modalAction}`,
  modalTitle: 'Передающая сторона:',
  cardTitle: 'Передает',
  mainAction: 'Добавить передающего?!'
}
