const _ = require('lodash');
const a = {
	'arp': {
		'arpName': 'arp',
		'bandwidthControl': {},
		'childStatus': false,
		'clientSessionLogging': {
			'clientSessionLoggingStatus': false,
			'loggingLevel': 'NONE',
		},
		'dhcpOption82Status': false,
		'id': 10950,
		'saveAsDistinct': false,
		'useExistingAclAndQos': true,
		'useExistingLocationPolicy': true,
		'useExistingPeriodPolicy': true,
		'useExistingPolicyList': false,
		'walledGarden': { 'allowDomains': [], 'socialLoginVendor': [] },
	},
	'assignments': [
		{
			'configType': 'ARP',
			'deviceMacs': [],
			'mode': 'DEVICE_GROUP',
			'vlanTunnelMapping': {
				'mappingType': 'Vlan',
				'vlans': ['Untagged VLAN'],
			},
			'group': {
				'id': '62d5386f3f8fdb4e2907544a',
				'name': 'default device group',
			},
			'site': { 'id': '62d5386f3f8fdb83d2075449', 'name': 'Unnamed site' },
			'name': 'default device group',
			'id': '62d5386f3f8fdb4e2907544a',
			'data': { 'mappingType': 'Vlan', 'vlans': ['Untagged VLAN'] },
			'shouldUpdateChild': false,
			'type': 'vlanTunnelMapping',
		},
		{
			'configType': 'ARP',
			'deviceMacs': [],
			'mode': 'DEVICE_GROUP',
			'vlanTunnelMapping': {
				'mappingType': 'Vlan',
				'vlans': ['Untagged VLAN'],
			},
			'group': {
				'id': '62f49b6b3c173834df34126b',
				'name': 'default device group',
			},
			'site': { 'id': '62f49b6b3c17382795341269', 'name': 'site-device' },
			'name': 'default device group',
			'id': '62f49b6b3c173834df34126b',
			'data': { 'mappingType': 'Vlan', 'vlans': ['Untagged VLAN'] },
			'shouldUpdateChild': false,
			'type': 'vlanTunnelMapping',
		},
	],
};

const b = {
	'arp': {
		'arpName': 'arp',
		'bandwidthControl': {},
		'childStatus': false,
		'clientSessionLogging': {
			'clientSessionLoggingStatus': false,
			'loggingLevel': 'NONE',
		},
		'dhcpOption82Status': false,
		'id': 10950,
		'saveAsDistinct': false,
		'useExistingAclAndQos': true,
		'useExistingLocationPolicy': true,
		'useExistingPeriodPolicy': true,
		'useExistingPolicyList': false,
		'walledGarden': { 'allowDomains': [], 'socialLoginVendor': [] },
	},
	'assignments': [
		{
			'configType': 'ARP',
			'deviceMacs': [],
			'mode': 'DEVICE_GROUP',
			'vlanTunnelMapping': {
				'mappingType': 'Vlan',
				'vlans': ['Untagged VLAN'],
			},
			'group': {
				'id': '62d5386f3f8fdb4e2907544a',
				'name': 'default device group',
			},
			'site': { 'id': '62d5386f3f8fdb83d2075449', 'name': 'Unnamed site' },
			'name': 'default device group',
			'id': '62d5386f3f8fdb4e2907544a',
			'data': { 'mappingType': 'Vlan', 'vlans': ['Untagged VLAN'] },
			'shouldUpdateChild': false,
			'type': 'vlanTunnelMapping',
		},
		{
			'configType': 'ARP',
			'deviceMacs': [],
			'mode': 'DEVICE_GROUP',
			'vlanTunnelMapping': {
				'mappingType': 'Vlan',
				'vlans': ['Untagged VLAN'],
			},
			'group': {
				'id': '62f49b6b3c173834df34126b',
				'name': 'default device group',
			},
			'site': { 'id': '62f49b6b3c17382795341269', 'name': 'site-device' },
			'name': 'default device group',
			'id': '62f49b6b3c173834df34126b',
			'data': { 'mappingType': 'Vlan', 'vlans': ['Untagged VLAN'] },
			'shouldUpdateChild': false,
			'type': 'vlanTunnelMapping',
		},
	],
};

// _.isEqual(a, b)
console.log('🚀 ~ file: temp.js ~ line 13 ~ _.isEqual(a, b)', _.isEqual(a, b));
