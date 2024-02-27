<lhc-widget <?php if (isset($customCardNoId)) : ?>no_panel_id="true"<?php endif;?> data_panel_id="transfered_chats" icon_class="chat-pending" no_link="true" list_identifier="transfer_chats" type="transfer_chats" hide_filter_options="true" optionsPanel='<?php echo json_encode(array('panelid' => 'transfer_chats'))?>' www_dir_flags="<?php echo erLhcoreClassDesign::design('images/flags');?>" expand_identifier="trchats_widget_exp" panel_list_identifier="transfer_chats-panel-list"></lhc-widget>

<?php /*
<div class="card card-dashboard card-transfered" data-panel-id="transfered_chats" ng-init="lhc.getToggleWidget('trchats_widget_exp')">
	<div class="card-header">
        <i class="material-icons chat-pending">chat</i> <span class="d-none d-lg-inline"><?php include(erLhcoreClassDesign::designtpl('lhfront/dashboard/panels/titles/transfered_chats.tpl.php'));?></span> ({{transfer_dep_chats.list.length}})</a>

        <a title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','collapse/expand')?>" ng-click="lhc.toggleWidget('trchats_widget_exp')" class="fs24 float-end material-icons exp-cntr">{{lhc.toggleWidgetData['trchats_widget_exp'] == false ? 'expand_less' : 'expand_more'}}</a>

        <?php $takenTimeAttributes = 'transfer_dep_chats.tt';?>
        <?php include(erLhcoreClassDesign::designtpl('lhfront/dashboard/panels/parts/taken_time.tpl.php'));?>

        <?php $takenTimeAttributes = 'transfer_chats.tt';?>
        <?php include(erLhcoreClassDesign::designtpl('lhfront/dashboard/panels/parts/taken_time.tpl.php'));?>

	</div>
	<div ng-if="lhc.toggleWidgetData['trchats_widget_exp'] !== true">
    	<div class="panel-list">
    		<div role="tabpanel" ng-show="transfer_dep_chats.list.length > 0 || transfer_chats.list.length > 0">
    		
    			<!-- Nav tabs -->
    			<ul class="nav nav-pills p-1" role="tablist">
    				<li role="presentation" class="nav-item"><a class="nav-link active" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','Chats transferred to you directly');?>" href="#transferedperson-widget" aria-controls="transferedperson-widget" role="tab" data-bs-toggle="tab"><i class="material-icons">account_box</i><span class="tru-cnt"></span></a></li>
    				<li role="presentation" class="nav-item"><a class="nav-link" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','Transferred to your department');?>" href="#transfereddep-widget" aria-controls="transfereddep-widget" role="tab" data-bs-toggle="tab"><i class="material-icons">account_box</i><span class="trd-cnt"></span></a></li>
    			</ul>
    			
    			<!-- Tab panes -->
    			<div class="tab-content mt-0">
    				<div role="tabpanel" class="tab-pane active" id="transferedperson-widget">
    				
            	      		<table class="table table-sm mb-0 table-small table-fixed" ng-if="transfer_chats.list.length > 0">
                        		<thead>
                        			<tr>
                        				<th width="60%"><i title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Visitor');?>" class="material-icons">face</i></th>
                        				<th width="40%"><i title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Created');?>" class="material-icons">access_time</i></th>
                        			</tr>
                        		</thead>
                        		<tr ng-repeat="chat in transfer_chats.list">
                        			<td>
                        			   <a title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Open in a new window');?>" class="material-icons" ng-click="lhc.startChatNewWindowTransfer(chat.id,chat.nick,chat.transfer_id,chat.transfer_scope)">open_in_new</a><span ng-if="chat.country_code != ''"><img ng-src="<?php echo erLhcoreClassDesign::design('images/flags');?>/{{chat.country_code}}.png" alt="{{chat.country_name}}" title="{{chat.country_name}}" /></span> <a ng-click="chat.transfer_scope == 1 ? lhc.previewMail(chat.id) : lhc.previewChat(chat.id)" class="material-icons">info_outline</a><a ng-click="lhc.startChatTransfer(chat.id,chat.nick,chat.transfer_id,chat.transfer_scope)" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Accept chat');?>">{{chat.nick}}</a>
                        			</td>	
                        			<td nowrap="nowrap">
                        			   <div class="abbr-list">{{chat.time_front}}</div>
                        			</td>			
                        		</tr>
                        	</table>
                        	
                        	<div ng-if="transfer_chats.list.length == 0" class="m-1 alert alert-info"><i class="material-icons">search</i><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Transferred chats to you will appear here.')?>...</div>
		
    				</div>
    				<div role="tabpanel" class="tab-pane" id="transfereddep-widget">
            	      		
            	      		<table class="table table-sm mb-0 table-small table-fixed" ng-if="transfer_dep_chats.list.length > 0">
                        		<thead>
                        			<tr>
                        				<th width="60%"><i title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Visitor');?>" class="material-icons">face</i></th>
                        				<th width="40%"><i title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Transfer time');?>" class="material-icons">access_time</i></th>
                        			</tr>
                        		</thead>
                        		<tr ng-repeat="chat in transfer_dep_chats.list">
                        			<td>
                        			   <span ng-if="chat.country_code != ''"><img ng-src="<?php echo erLhcoreClassDesign::design('images/flags');?>/{{chat.country_code}}.png" alt="{{chat.country_name}}" title="{{chat.country_name}}" /></span><a title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Open in a new window');?>" class="material-icons" ng-click="lhc.startChatNewWindowTransfer(chat.id,chat.nick,chat.transfer_id,chat.transfer_scope)">open_in_new</a>
                                        <a ng-click="chat.transfer_scope == 1 ? lhc.previewMail(chat.id) : lhc.previewChat(chat.id)" class="material-icons">{{chat.transfer_scope == 1 ? 'mail_outline' : 'chat'}}</a>
                                        <a ng-click="lhc.startChatTransfer(chat.id,chat.nick,chat.transfer_id)" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Accept chat');?>">{{chat.nick}}</a>
                        			</td>	
                        			<td nowrap="nowrap">
                        			   <div class="abbr-list">{{chat.time_front}}</div>
                        			</td>			
                        		</tr>
                        	</table>
                        	
                        	<div ng-if="transfer_dep_chats.list.length == 0" class="m-1 alert alert-info"><i class="material-icons">search</i><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Transferred chats to your department will appear here.')?>...</div>
                       
    				</div>
    			</div>
    		</div>
    		
    		<div ng-if="transfer_chats.list.length == 0 && transfer_dep_chats.list.length == 0" class="m-1 alert alert-light"><i class="material-icons">search</i><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Transferred chats to you or your department will appear here.')?>...</div>
    		
    	</div>
	</div>
</div>
*/ ?>


