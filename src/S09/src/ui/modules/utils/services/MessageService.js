angular.module('UtilsModule').service('MessageService',
[ '$rootScope', '$timeout',
function($rootScope, $timeout) {
	
	var createMessage = function(closable, autoclose, level, message, title){
		var objMessage = {
			id		:	'message_' + level.type + "_" + (new Date()).getTime(),
			level		:	level.type,
			message		:	message,
			autoclose	:	autoclose,
			closable	:	closable
		}
		if(title != undefined && title != null){
			objMessage.title = title;
		} else {
			objMessage.title = level.label;
		}
		return objMessage;
	};
	
	this.closeMessage = function(objMessage){
		$timeout(function(){
			$("#" + objMessage.id).on('close.bs.alert', function () {
				for(var i = 0; i < $rootScope.messageList.length; i++){
					if($rootScope.messageList[i].id == objMessage.id){
						$rootScope.messageList.splice(i, 1);
						break;
					}
				}
			});
			if(objMessage.autoclose){
				$timeout(function(){
					$("#" + objMessage.id).alert('close');
				}, 5000);
			}
		}, 1);
	};
	
	this.showMessage = function(closable, autoclose, level, message, title){
		var objMessage = createMessage(closable, autoclose, level, message, title);
		$rootScope.messageList.push(objMessage);
		this.closeMessage(objMessage);
	};

} ]);
