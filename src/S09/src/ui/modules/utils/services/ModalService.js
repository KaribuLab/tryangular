angular.module('UtilsModule').service('ModalService',
[ '$uibModal', '$sce',
function($uibModal, $sce) {
	
	this.createDataDialog = function(type, config){
	    var data = {};
		data.type = type.type;
		if(config != undefined){
			data.title = config.title;
		}
		if(type == this.TYPE.alert){
			data.button = type.button;
			if(config != undefined){
				if(config.button != undefined){
					data.button = config.button;
				}
			}
		} else if(type == this.TYPE.confirm){
			data.buttonAccept = type.buttonAccept;
			data.buttonCancel = type.buttonCancel;
			if(config != undefined){
				data.accept = config.actionAccept;
				if(config.buttonAccept != undefined){
					data.buttonAccept = config.buttonAccept;
				}
				if(config.buttonCancel != undefined){
					data.buttonCancel = config.buttonCancel;
				}
			}
		} else if(type == this.TYPE.yesOrNo){
			data.buttonYes = type.buttonYes;
			data.buttonNo = type.buttonNo;
			data.buttonCancel = type.buttonCancel;
			if(config != undefined){
				data.yes = config.actionYes;
				data.no = config.actionNo;
				if(config.buttonYes != undefined){
					data.buttonYes = config.buttonYes;
				}
				if(config.buttonNo != undefined){
					data.buttonNo = config.buttonNo;
				}
				if(config.buttonCancel != undefined){
					data.buttonCancel = config.buttonCancel;
				}
			}
		} else if(type == this.TYPE.options){
			data.buttonCancel = type.buttonCancel;
			if(config != undefined){
				data.options = config.options;
				if(config.buttonCancel != undefined){
					data.buttonCancel = config.buttonCancel;
				}
			}
		}
		return data;
	};
	
	this.openModal = function(size, view, controller){
		var modal = {
			animation: true,
			size: size,
			templateUrl: view,
			controller: controller
		}
		$uibModal.open(modal);
	};
	
	this.openDialog = function(dataDialog, size){
        this.openModal(size, "../utils/commons/ModalView.html",
        function($scope, $uibModalInstance) {
			$scope.data = dataDialog;
			$scope.data.close = function () {
				$uibModalInstance.close();
			};
		});
	};
	
	this.showDialog = function(message, type, size, config){
	    var dataDialog = this.createDataDialog(type, config);
	    dataDialog.message = message;
		this.openDialog(dataDialog, size);
	};
	
	this.showDialogHtml = function(codeHtml, type, size, config){
	    var dataDialog = this.createDataDialog(type, config);
	    dataDialog.dataHtml = $sce.getTrustedHtml(codeHtml);
        this.openDialog(dataDialog, size);
	};
	
	this.TYPE = {
        alert   :   {
            type    :    "ALERT",
            button  :    "Aceptar"
        },
        confirm :   {
            type            :    "CONFIRM",
            buttonAccept    :    "Aceptar",
            buttonCancel    :    "Cancelar"
        },
        yesOrNo  :   {
            type            :   "YES_NO",
            buttonYes       :   "Sí",
            buttonNo        :   "No",
            buttonCancel    :   "Cancelar"
        },
        options :   {
            type            :   "OPTIONS",
            buttonCancel    :   "Cancelar"
        }
    };
    
    this.SIZE = {
        sm  :   'sm',
        md  :   'md',
        lg  :   'lg',
    }

} ]);
