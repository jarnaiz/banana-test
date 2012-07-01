		/**
		 * Crea el objeto counter
		 * thx: http://www.devcurry.com/2010/06/display-running-counter-using-jquery.html
		 */
		function createCounter(element){
			// variable :)
			var element = element;
			// es usada dentro del objeto: closure!
			return {
				cnt: 0,
				lastValue: -1,
				started: false,
				counter: function(){},
				
				// ejecuta el conometro
				start: function() {
					if (!this.started){
						console.log("start para el elemento: " + element);
						var self = this;
						this.counter = setInterval(function() {
							self.started = true;
							//console.log(self.elemenet)
							element.html(self.cnt);
							self.cnt++;
							
						}, 1000);
					}
				},
				// detiene el conometro
				// si save = true, guarda el valor en htmlstorage
				stop: function(save) {
					
					if (save && this.started) {
						
						var stringArray = localStorage["ranking"];
						var results = JSON.parse(stringArray);
						results.push({user: "anonimous", time: this.cnt});
						console.log(results);
						localStorage["ranking"] = JSON.stringify(results);
					}
					
					clearInterval(this.counter);
					this.lastalue = this.cnt;
					this.cnt = 0;
					this.started = false;
					element.html(this.cnt);
				},
				/**
				 * Obtiene el último valor que se ha parado.
				 */
				 getLastValue: function(){
					return this.lastValue;
				 }
				
			}
		}