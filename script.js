/*ValidacionPersonalizada Prototype:

	-Realiza un seguimiento de la lista de mensajes de invalidez para la entrada.
	-Realiza un seguimiento de las comprobaciones de validez que se deben realizar para la entrada.
	-Realiza las comprobaciones de validez y envia comentarios al front-end.

*/

function ValidacionPersonalizada(input) 
{
	this.invalido = [];
	this.verificarValidez = [];	//Agrega una referencia al nodo de Entrada.
	this.inputNode = input; //Metodo de activacion para adjuntar al listener.
	this.registroListener();
}

ValidacionPersonalizada.prototype = 
{
	agregarInvalidez: function(mensaje)
	{
		this.invalido.push(mensaje);
	},
	
	getinvalido: function()
	{
		return this.invalido.join('. \n');
	},
	
	verValidez: function(input)
	{
		for(var i=0; i< this.verificarValidez.length; i++)
		{
			var esInvalido = this.verificarValidez[i].esInvalido(input);
			if (esInvalido)
			{
				this.agregarInvalidez(this.verificarValidez[i].mensajeInvalido);
			} //Cierre del 'if'.

			var requirementElement = this.verificarValidez[i].element;
			if (requirementElement)
			{
				if (esInvalido)
				{
					requirementElement.classList.add('invalido');
					requirementElement.classList.remove('valido');
				}
				else
				{
					requirementElement.classList.remove('invalido');
					requirementElement.classList.add('valido');
				} //cierre del 'else'.
			}//cierre del 'if (requirementeElement)'.
		}//cierre del 'for'.
	}, //cierre del 'verValidez'.

	checkInput: function()
	{
		this.inputNode.ValidacionPersonalizada.invalido = [];
		this.verValidez(this.inputNode);

		if (this.inputNode.ValidacionPersonalizada.invalido.length === 0 && this.inputNode.value !== '')
		{
			this.inputNode.setCustomValidity('');
		}
		else
		{
			var mensaje = this.inputNode.ValidacionPersonalizada.getinvalido();
			this.inputNode.setCustomValidity(mensaje);
		}
	},
	registroListener: function() // registramos al listener.
	{
		var ValidacionPersonalizada = this;
		this.inputNode.addEventListener('keyup', function()
		{
			ValidacionPersonalizada.checkInput();
		});
	} //fin del registroListener.
};

 
/* 
-- Validity Checks --
Son las matrices de comprobacion de validez de entrada. Constan de 3 cosas:

	1. esInvalido() - Es la funcion para determinar si la entrada cumple con un requisito particular.
	2. mensajeInvalido - Es el mensaje de error para mostrar si el campo no es valido.
	3. element - Es el elemento que estable el requisito.
 */

var nameverificarValidez = 
[
	{
		esInvalido: function(input)
		{
			return input.value.length < 15 | input.value.length > 150;
		},
		mensajeInvalido: 'Esta entrada debe tener al menos entre 15 a 150 caracteres.',
		element: document.querySelector('div[for="name"] .input-requirements li:nth-child(1)')
	},

	{
		esInvalido: function(input)
		{
			var illegalCharacters = input.value.match(/[^a-zA-Z ]/g);
			return illegalCharacters ? true : false;
		},
		mensajeInvalido: 'Solo se permiten letras.',
		element: document.querySelector('div[for="name"] .input-requirements li:nth-child(2)')
	}
];


var cardverificarValidez = 
[
	{
		esInvalido: function(input)
		{
			var illegalCharacters = input.value.match(/[^0-9]/g);
			return illegalCharacters ? true : false;
		},
		mensajeInvalido: 'Esta entrada debe tener números del 0 al 9.',
		element: document.querySelector('div[for="card"] .input-requirements li:nth-child(1)')
	},

	{
		esInvalido: function(input)
		{
			return input.value.length < 16;
		},
		mensajeInvalido: 'Se requiere los 16 digitos de la tarjeta.',
		element: document.querySelector('div[for="card"] .input-requirements li:nth-child(2)')
	}
];

var nipverificarValidez = 
[
	{
		esInvalido: function(input)
		{
			var illegalCharacters = input.value.match(/[^0-9]/g);
			return illegalCharacters ? true : false;
		},
		mensajeInvalido: 'Esta entrada debe tener números del 0 al 9.',
		element: document.querySelector('div[for="nip"] .input-requirements li:nth-child(1)')
	},

	{
		esInvalido: function(input)
		{
			return input.value.length < 3;
		},
		mensajeInvalido: 'Se requiere los 3 digitos del NIP de la tarjeta.',
		element: document.querySelector('div[for="nip"] .input-requirements li:nth-child(2)')
	}
];

var vencimesverificarValidez = 
[
	{
		esInvalido: function(input)
		{
			var illegalCharacters = input.value.match(/[^0-9]/g);
			return illegalCharacters ? true : false;
		},
		mensajeInvalido: 'Esta entrada debe tener números del 0 al 9.',
		element: document.querySelector('div[for="vencimes"] .input-requirements li:nth-child(1)')
	},

	{
		esInvalido: function(input)
		{
			return input.value.length < 2;
		},
		mensajeInvalido: 'Se requiere los 2 digitos para el Mes.',
		element: document.querySelector('div[for="vencimes"] .input-requirements li:nth-child(2)')
	}
];


var venciyearverificarValidez = 
[
	{
		esInvalido: function(input)
		{
			var illegalCharacters = input.value.match(/[^0-9]/g);
			return illegalCharacters ? true : false;
		},
		mensajeInvalido: 'Esta entrada debe tener números del 0 al 9.',
		element: document.querySelector('div[for="venciyear"] .input-requirements li:nth-child(1)')
	},

	{
		esInvalido: function(input)
		{
			return input.value.length < 2;
		},
		mensajeInvalido: 'Se requiere los 2 digitos para el Año.',
		element: document.querySelector('div[for="venciyear"] .input-requirements li:nth-child(2)')
	}
];


var emailverificarValidez = 
[
	{
		esInvalido: function(input)
		{
			return input.value.length < 8 | input.value.length > 150;
		},
		mensajeInvalido: 'Esta entrada debe tener al menos entre 8 a 150 caracteres.',
		element: document.querySelector('div[for="email"] .input-requirements li:nth-child(1)')
	},

	{
		esInvalido: function(input)
		{
			return !input.value.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g);
		},
		mensajeInvalido: 'Solo se permite un E-Mail.',
		element: document.querySelector('div[for="email"] .input-requirements li:nth-child(2)')
	}
];

var descriptiontverificarValidez = 
[
	{
		esInvalido: function(input)
		{
			return input.value.length < 15 | input.value.length > 150;
		},
		mensajeInvalido: 'Esta entrada debe tener al menos entre 15 a 150 caracteres.',
		element: document.querySelector('div[for="description"] .input-requirements li:nth-child(1)')
	},

	{
		esInvalido: function(input)
		{
			var illegalCharacters = input.value.match(/[^a-zA-Z ]/g);
			return illegalCharacters ? true : false;
		},
		mensajeInvalido: 'Solo se permiten letras.',
		element: document.querySelector('div[for="description"] .input-requirements li:nth-child(2)')
	}
];


var totalverificarValidez = 
[
	{
		esInvalido: function(input)
		{
			var illegalCharacters = input.value.match(/[^0-9]/g);
			return illegalCharacters ? true : false;
		},
		mensajeInvalido: 'Esta entrada debe tener números del 0 al 9.',
		element: document.querySelector('div[for="total"] .input-requirements li:nth-child(1)')
	},

	{
		esInvalido: function(input)
		{
			return input.value.length > 5;
		},
		mensajeInvalido: 'Se requiere maximmo 5 números..',
		element: document.querySelector('div[for="total"] .input-requirements li:nth-child(2)')
	}
];




/*
-- Setup ValidacionPersonalizada --
	1. Configuramos el prototype ValidacionPersonalizada para cada input.
	2. Y tambien establecemos que matriz de comprobacion de validez se utilizara en cada input.
*/

var nameInput = document.getElementById('name');
var cardInput = document.getElementById('card');
var nipInput = document.getElementById('nip');
var vencimesInput = document.getElementById('vencimes');
var venciyearInput = document.getElementById('venciyear');
var emailInput = document.getElementById('email');
var descriptionInput = document.getElementById('description');
var totalInput = document.getElementById('total');


nameInput.ValidacionPersonalizada = new ValidacionPersonalizada(nameInput);
nameInput.ValidacionPersonalizada.verificarValidez = nameverificarValidez;

cardInput.ValidacionPersonalizada = new ValidacionPersonalizada(cardInput);
cardInput.ValidacionPersonalizada.verificarValidez = cardverificarValidez;

nipInput.ValidacionPersonalizada = new ValidacionPersonalizada(nipInput);
nipInput.ValidacionPersonalizada.verificarValidez = nipverificarValidez;

vencimesInput.ValidacionPersonalizada = new ValidacionPersonalizada(vencimesInput);
vencimesInput.ValidacionPersonalizada.verificarValidez = vencimesverificarValidez;

venciyearInput.ValidacionPersonalizada = new ValidacionPersonalizada(venciyearInput);
venciyearInput.ValidacionPersonalizada.verificarValidez = venciyearverificarValidez;

emailInput.ValidacionPersonalizada = new ValidacionPersonalizada(emailInput);
emailInput.ValidacionPersonalizada.verificarValidez = emailverificarValidez;

descriptionInput.ValidacionPersonalizada = new ValidacionPersonalizada(descriptionInput);
descriptionInput.ValidacionPersonalizada.verificarValidez = descriptiontverificarValidez;

totalInput.ValidacionPersonalizada = new ValidacionPersonalizada(totalInput);
totalInput.ValidacionPersonalizada.verificarValidez = totalverificarValidez;


/*
-- Eventos de Listeners --
*/


var inputs = document.querySelectorAll('input:not([type="submit"])');
var submit = document.querySelector('input[type="submit"]');

function validar()
{
	for (var i=0; i < inputs.length; i++)
	{
		inputs[i].ValidacionPersonalizada.checkInput();
	}
}
submit.addEventListener('click', validar);
form.addEventListener('submit', validar);