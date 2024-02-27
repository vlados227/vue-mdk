const app = Vue.createApp({
    data() {
        return {
            courseName: 'ваш курс',
            userName: 'Вася Пупкин',
            tasks: ['Задача 1', 'Задача 2', 'Задача 3', 'Задача 4'],
            newPhone:'',
            phones: [
                {title: 'A52', company: 'Samsung'},
                {title: 'Iphone 14', company: 'Apple'}
            ],
            forms: {
                input1: null
            }
        }
    },
    computed: {
        filteredList(){
            let comp = this.company;
            return this.phones.filter(function (el) {
                if (comp === '') return true;
                else return el.company.indexOf(comp) > -1;
            })
        }
    }
}).mount('#app');