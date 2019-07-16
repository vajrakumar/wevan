Ext.define('icd.view.home.PharmacyGrid', {
	extend: 'Ext.grid.Grid',
	xtype: 'icd-home-pharmacygrid',

	bind: {
		store: '{prescriptions}'
	},

	controller: 'icd-home-pharmacygrid',
	viewModel: 'icd-home-pharmacygrid',

	emptyText: 'No results are available based on selected filters or search criteria.',
	reserveScrollbar: true,
	userCls: 'icd-home-pharmacygrid',

	columns: [{
		dataIndex: 'currentRank',
		text: 'RANK',
		cell: {
			encodeHtml: false
		},
		tpl: [
			'<div class="cell-indicators">',
			'	{currentRank}',
			'	<tpl if="currentRank != priorRank">',
			'		<div class="tag tag-{[this.getClass(values)]}">',
			'			{priorRank}',
			'			<span class="tag-addon">',
			'				<i class="fa {[this.getIndicator(values)]}"></i>',
			'			</span>',
			'		</div>',
			'	</tpl>',
			'</div>',
			{
				getClass: function(values) {
					if (values.priorRank > 25) {
						return 'warning';
					} else if (values.currentRank < values.priorRank) {
						return 'danger';
					} else if (values.currentRank > values.priorRank) {
						return 'success';
					}
				},
				getIndicator: function(values) {
					if (values.priorRank > 25) {
						return 'fa-plus-circle';
					} else if (values.currentRank < values.priorRank) {
						return 'fa-arrow-circle-up';
					} else if (values.currentRank > values.priorRank) {
						return 'fa-arrow-circle-down';
					}
				}
			}
		]
	}, {
		dataIndex: 'drugName',
		text: 'DRUG NAME',
		flex: 1,
		minWidth: 150
	}, {
		dataIndex: 'dispenseType',
		text: 'DISPENSE TYPE',
		flex: 1,
		minWidth: 150
	}, {
		dataIndex: 'therapeuticClass',
		text: 'THERAPEUTIC CLASS',
		flex: 1,
		minWidth: 150
	}, {
		xtype: 'numbercolumn',
		dataIndex: 'grossCost',
		text: 'GROSS COST',
		align: 'right',
		format: '$0,0',
		width: 125
	}, {
		xtype: 'numbercolumn',
		dataIndex: 'totalRx',
		text: 'TOTAL RX',
		align: 'right',
		format: '0,0'
	}, {
		xtype: 'numbercolumn',
		dataIndex: 'utilizers',
		text: 'TOTAL<br/>UTILIZERS',
		align: 'right',
		format: '0,0',
		cell: {
			tools: {
				info: {
					iconCls: 'x-fa fa-info-circle',
					zone: 'end',
					handler: 'showPharmacyDetails'
				}
			}
		}
	}, {
		xtype: 'numbercolumn',
		dataIndex: 'grossCostPerRx',
		text: 'GROSS COST<br/>PER RX',
		align: 'right',
		format: '$0,0.00',
		width: 125
	}, {
		xtype: 'numbercolumn',
		dataIndex: 'grossCostPerDaysSupply',
		text: 'GROSS COST<br/>PER DAYS SUPPLY',
		align: 'right',
		format: '$0,0.00',
		width: 125
	}]
});
