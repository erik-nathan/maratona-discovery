const Modal = {
    open(){
        // Abrir modal
        // Adicionar a class activie ao modal
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    close(){
        // Fechar o modal
        // Remover a class actice do modal
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}

const transaction = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000
        date: '23/01/2021'
    },
    {
        id: 2,
        description: 'Website',
        amount: 50000
        date: '23/01/2021'
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000
        date: '23/01/2021'
    },
]

const Transaction = {
    incomes() {
        // somar as entras
    }
    expenses() {
        // somar as saídas
    }
    total() {
        // entrada - saídas
    }
}

const DOM = {
    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        
    },
    innerHTMLTransaction() {

        const html = `
            <td class="description">Luz</td>
            <td class="expense">- R$ 500,00</td>
            <td class="date">23/01/2020</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover transação">
            </td>
        `

        return html
    }
}

DOM.addTransaction(transactions[0])
