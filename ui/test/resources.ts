export const links = {
  self: '/chronograf/v1/sources/16',
  kapacitors: '/chronograf/v1/sources/16/kapacitors',
  proxy: '/chronograf/v1/sources/16/proxy',
  queries: '/chronograf/v1/sources/16/queries',
  write: '/chronograf/v1/sources/16/write',
  permissions: '/chronograf/v1/sources/16/permissions',
  users: '/chronograf/v1/sources/16/users',
  databases: '/chronograf/v1/sources/16/dbs',
}

export const source = {
  id: '16',
  name: 'ssl',
  type: 'influx',
  username: 'admin',
  url: 'https://localhost:9086',
  insecureSkipVerify: true,
  default: false,
  telegraf: 'telegraf',
  organization: '0',
  role: 'viewer',
  links,
}

export const query = {
  id: '0',
  database: 'db1',
  measurement: 'm1',
  retentionPolicy: 'r1',
  fill: 'null',
  fields: [
    {
      value: 'f1',
      type: 'field',
      alias: 'foo',
      args: [],
    },
  ],
  tags: {
    tk1: ['tv1', 'tv2'],
  },
  groupBy: {
    time: null,
    tags: [],
  },
  areTagsAccepted: true,
  rawText: null,
  status: null,
  shifts: [],
}

export const kapacitor = {
  url: '/foo/bar/baz',
  name: 'kapa',
  username: 'influx',
  password: '',
  active: false,
  insecureSkipVerify: false,
  links: {
    self: '/kapa/1',
    proxy: '/proxy/kapacitor/1',
  },
}

export const kapacitorRules = [
  {
    id: 'chronograf-v1-1bb60c5d-9c46-4601-8fdd-930ac5d2ae3d',
    tickscript:
      "var db = 'telegraf'\n\nvar rp = 'autogen'\n\nvar measurement = 'cpu'\n\nvar groupBy = ['cpu']\n\nvar whereFilter = lambda: (\"cpu\" != 'cpu-total' OR \"cpu\" != 'cpu1')\n\nvar period = 1h\n\nvar name = 'asdfasdfasdfasdfbob'\n\nvar idVar = name + ':{{.Group}}'\n\nvar message = ''\n\nvar idTag = 'alertID'\n\nvar levelTag = 'level'\n\nvar messageField = 'message'\n\nvar durationField = 'duration'\n\nvar outputDB = 'chronograf'\n\nvar outputRP = 'autogen'\n\nvar outputMeasurement = 'alerts'\n\nvar triggerType = 'deadman'\n\nvar threshold = 0.0\n\nvar data = stream\n    |from()\n        .database(db)\n        .retentionPolicy(rp)\n        .measurement(measurement)\n        .groupBy(groupBy)\n        .where(whereFilter)\n\nvar trigger = data\n    |deadman(threshold, period)\n        .stateChangesOnly()\n        .message(message)\n        .id(idVar)\n        .idTag(idTag)\n        .levelTag(levelTag)\n        .messageField(messageField)\n        .durationField(durationField)\n        .stateChangesOnly()\n        .pushover()\n        .pushover()\n        .sensu()\n        .source('Kapacitorsdfasdf')\n        .handlers()\n\ntrigger\n    |eval(lambda: \"emitted\")\n        .as('value')\n        .keep('value', messageField, durationField)\n    |eval(lambda: float(\"value\"))\n        .as('value')\n        .keep()\n    |influxDBOut()\n        .create()\n        .database(outputDB)\n        .retentionPolicy(outputRP)\n        .measurement(outputMeasurement)\n        .tag('alertName', name)\n        .tag('triggerType', triggerType)\n\ntrigger\n    |httpOut('output')\n",
    query: {
      id: 'chronograf-v1-1bb60c5d-9c46-4601-8fdd-930ac5d2ae3d',
      database: 'telegraf',
      measurement: 'cpu',
      retentionPolicy: 'autogen',
      fields: [],
      tags: {
        cpu: ['cpu-total', 'cpu1'],
      },
      groupBy: {
        time: '',
        tags: ['cpu'],
      },
      areTagsAccepted: false,
      rawText: null,
      range: null,
      shifts: null,
    },
    every: '',
    alertNodes: {
      typeOf: 'alert',
      stateChangesOnly: true,
      useFlapping: false,
      post: [],
      tcp: [],
      email: [],
      exec: [],
      log: [],
      victorOps: [],
      pagerDuty: [],
      pushover: [
        {
          userKey: '',
          device: '',
          title: '',
          url: '',
          urlTitle: '',
          sound: '',
        },
        {
          userKey: '',
          device: '',
          title: '',
          url: '',
          urlTitle: '',
          sound: '',
        },
      ],
      sensu: [
        {
          source: 'Kapacitorsdfasdf',
          handlers: [],
        },
      ],
      slack: [],
      telegram: [],
      hipChat: [],
      alerta: [],
      opsGenie: [],
      talk: [],
    },
    message: '',
    details: '',
    trigger: 'deadman',
    values: {
      period: '1h0m0s',
      rangeValue: '',
    },
    name: 'asdfasdfasdfasdfbob',
    type: 'stream',
    dbrps: [
      {
        db: 'telegraf',
        rp: 'autogen',
      },
    ],
    status: 'enabled',
    executing: true,
    error: '',
    created: '2018-01-05T15:40:48.195743458-08:00',
    modified: '2018-03-13T17:17:23.991640555-07:00',
    'last-enabled': '2018-03-13T17:17:23.991640555-07:00',
    links: {
      self:
        '/chronograf/v1/sources/1/kapacitors/1/rules/chronograf-v1-1bb60c5d-9c46-4601-8fdd-930ac5d2ae3d',
      kapacitor:
        '/chronograf/v1/sources/1/kapacitors/1/proxy?path=%2Fkapacitor%2Fv1%2Ftasks%2Fchronograf-v1-1bb60c5d-9c46-4601-8fdd-930ac5d2ae3d',
      output:
        '/chronograf/v1/sources/1/kapacitors/1/proxy?path=%2Fkapacitor%2Fv1%2Ftasks%2Fchronograf-v1-1bb60c5d-9c46-4601-8fdd-930ac5d2ae3d%2Foutput',
    },
  },
  {
    id: 'chronograf-v1-75b638b0-1530-4163-adab-c9631386e0a2',
    tickscript:
      "var db = 'telegraf'\n\nvar rp = 'autogen'\n\nvar measurement = 'disk'\n\nvar groupBy = []\n\nvar whereFilter = lambda: TRUE\n\nvar name = 'Untitled bob'\n\nvar idVar = name + ':{{.Group}}'\n\nvar message = ''\n\nvar idTag = 'alertID'\n\nvar levelTag = 'level'\n\nvar messageField = 'message'\n\nvar durationField = 'duration'\n\nvar outputDB = 'chronograf'\n\nvar outputRP = 'autogen'\n\nvar outputMeasurement = 'alerts'\n\nvar triggerType = 'threshold'\n\nvar crit = 0\n\nvar data = stream\n    |from()\n        .database(db)\n        .retentionPolicy(rp)\n        .measurement(measurement)\n        .groupBy(groupBy)\n        .where(whereFilter)\n    |eval(lambda: \"inodes_free\")\n        .as('value')\n\nvar trigger = data\n    |alert()\n        .crit(lambda: \"value\" == crit)\n        .stateChangesOnly()\n        .message(message)\n        .id(idVar)\n        .idTag(idTag)\n        .levelTag(levelTag)\n        .messageField(messageField)\n        .durationField(durationField)\n        .stateChangesOnly()\n        .email()\n        .pagerDuty()\n        .alerta()\n        .environment('bob')\n        .origin('kapacitoadfr')\n        .services()\n\ntrigger\n    |eval(lambda: float(\"value\"))\n        .as('value')\n        .keep()\n    |influxDBOut()\n        .create()\n        .database(outputDB)\n        .retentionPolicy(outputRP)\n        .measurement(outputMeasurement)\n        .tag('alertName', name)\n        .tag('triggerType', triggerType)\n\ntrigger\n    |httpOut('output')\n",
    query: {
      id: 'chronograf-v1-75b638b0-1530-4163-adab-c9631386e0a2',
      database: 'telegraf',
      measurement: 'disk',
      retentionPolicy: 'autogen',
      fields: [
        {
          value: 'inodes_free',
          type: 'field',
          alias: '',
        },
      ],
      tags: {},
      groupBy: {
        time: '',
        tags: [],
      },
      areTagsAccepted: false,
      rawText: null,
      range: null,
      shifts: null,
    },
    every: '',
    alertNodes: {
      typeOf: 'alert',
      stateChangesOnly: true,
      useFlapping: false,
      post: [],
      tcp: [],
      email: [
        {
          to: [],
        },
      ],
      exec: [],
      log: [],
      victorOps: [],
      pagerDuty: [
        {
          serviceKey: '',
        },
      ],
      pushover: [],
      sensu: [],
      slack: [],
      telegram: [],
      hipChat: [],
      alerta: [
        {
          token: '',
          resource: '',
          event: '',
          environment: 'bob',
          group: '',
          value: '',
          origin: 'kapacitoadfr',
          service: [],
        },
      ],
      opsGenie: [],
      talk: [],
    },
    message: '',
    details: '',
    trigger: 'threshold',
    values: {
      operator: 'equal to',
      value: '0',
      rangeValue: '',
    },
    name: 'Untitled bob',
    type: 'stream',
    dbrps: [
      {
        db: 'telegraf',
        rp: 'autogen',
      },
    ],
    status: 'disabled',
    executing: false,
    error: '',
    created: '2018-01-05T15:41:22.759905067-08:00',
    modified: '2018-03-14T18:46:37.940091231-07:00',
    'last-enabled': '2018-03-14T18:46:32.409262103-07:00',
    links: {
      self:
        '/chronograf/v1/sources/1/kapacitors/1/rules/chronograf-v1-75b638b0-1530-4163-adab-c9631386e0a2',
      kapacitor:
        '/chronograf/v1/sources/1/kapacitors/1/proxy?path=%2Fkapacitor%2Fv1%2Ftasks%2Fchronograf-v1-75b638b0-1530-4163-adab-c9631386e0a2',
      output:
        '/chronograf/v1/sources/1/kapacitors/1/proxy?path=%2Fkapacitor%2Fv1%2Ftasks%2Fchronograf-v1-75b638b0-1530-4163-adab-c9631386e0a2%2Foutput',
    },
  },
  {
    id: 'chronograf-v1-7734918d-b8b6-460d-a416-34767ba76faa',
    tickscript:
      "var db = 'telegraf'\n\nvar rp = 'autogen'\n\nvar measurement = 'cpu'\n\nvar groupBy = []\n\nvar whereFilter = lambda: (\"host\" == 'Bobs-MacBook-Pro.local')\n\nvar period = 24h\n\nvar name = 'xena'\n\nvar idVar = name + ':{{.Group}}'\n\nvar message = ''\n\nvar idTag = 'alertID'\n\nvar levelTag = 'level'\n\nvar messageField = 'message'\n\nvar durationField = 'duration'\n\nvar outputDB = 'chronograf'\n\nvar outputRP = 'autogen'\n\nvar outputMeasurement = 'alerts'\n\nvar triggerType = 'deadman'\n\nvar threshold = 0.0\n\nvar data = stream\n    |from()\n        .database(db)\n        .retentionPolicy(rp)\n        .measurement(measurement)\n        .groupBy(groupBy)\n        .where(whereFilter)\n\nvar trigger = data\n    |deadman(threshold, period)\n        .stateChangesOnly()\n        .message(message)\n        .id(idVar)\n        .idTag(idTag)\n        .levelTag(levelTag)\n        .messageField(messageField)\n        .durationField(durationField)\n        .hipChat()\n        .room('asdf')\n\ntrigger\n    |eval(lambda: \"emitted\")\n        .as('value')\n        .keep('value', messageField, durationField)\n    |eval(lambda: float(\"value\"))\n        .as('value')\n        .keep()\n    |influxDBOut()\n        .create()\n        .database(outputDB)\n        .retentionPolicy(outputRP)\n        .measurement(outputMeasurement)\n        .tag('alertName', name)\n        .tag('triggerType', triggerType)\n\ntrigger\n    |httpOut('output')\n",
    query: {
      id: 'chronograf-v1-7734918d-b8b6-460d-a416-34767ba76faa',
      database: 'telegraf',
      measurement: 'cpu',
      retentionPolicy: 'autogen',
      fields: [],
      tags: {
        host: ['Bobs-MacBook-Pro.local'],
      },
      groupBy: {
        time: '',
        tags: [],
      },
      areTagsAccepted: true,
      rawText: null,
      range: null,
      shifts: null,
    },
    every: '',
    alertNodes: {
      typeOf: 'alert',
      stateChangesOnly: true,
      useFlapping: false,
      post: [],
      tcp: [],
      email: [],
      exec: [],
      log: [],
      victorOps: [],
      pagerDuty: [],
      pushover: [],
      sensu: [],
      slack: [],
      telegram: [],
      hipChat: [
        {
          room: 'asdf',
          token: '',
        },
      ],
      alerta: [],
      opsGenie: [],
      talk: [],
    },
    message: '',
    details: '',
    trigger: 'deadman',
    values: {
      period: '24h0m0s',
      rangeValue: '',
    },
    name: 'xena',
    type: 'stream',
    dbrps: [
      {
        db: 'telegraf',
        rp: 'autogen',
      },
    ],
    status: 'disabled',
    executing: false,
    error: '',
    created: '2018-01-05T15:44:54.657212781-08:00',
    modified: '2018-03-13T17:17:19.099800735-07:00',
    'last-enabled': '2018-03-13T17:17:15.964357573-07:00',
    links: {
      self:
        '/chronograf/v1/sources/1/kapacitors/1/rules/chronograf-v1-7734918d-b8b6-460d-a416-34767ba76faa',
      kapacitor:
        '/chronograf/v1/sources/1/kapacitors/1/proxy?path=%2Fkapacitor%2Fv1%2Ftasks%2Fchronograf-v1-7734918d-b8b6-460d-a416-34767ba76faa',
      output:
        '/chronograf/v1/sources/1/kapacitors/1/proxy?path=%2Fkapacitor%2Fv1%2Ftasks%2Fchronograf-v1-7734918d-b8b6-460d-a416-34767ba76faa%2Foutput',
    },
  },
  {
    // if rule has no `query` key, it will display as a tickscript task only
    id: 'chronograf-v1-7734918d-b8b6-460d-a416-34767ba76aac',
    tickscript:
      "var db = 'telegraf'\n\nvar rp = 'autogen'\n\nvar measurement = 'cpu'\n\nvar groupBy = []\n\nvar whereFilter = lambda: (\"host\" == 'Bobs-MacBook-Pro.local')\n\nvar period = 24h\n\nvar name = 'xena'\n\nvar idVar = name + ':{{.Group}}'\n\nvar message = ''\n\nvar idTag = 'alertID'\n\nvar levelTag = 'level'\n\nvar messageField = 'message'\n\nvar durationField = 'duration'\n\nvar outputDB = 'chronograf'\n\nvar outputRP = 'autogen'\n\nvar outputMeasurement = 'alerts'\n\nvar triggerType = 'deadman'\n\nvar threshold = 0.0\n\nvar data = stream\n    |from()\n        .database(db)\n        .retentionPolicy(rp)\n        .measurement(measurement)\n        .groupBy(groupBy)\n        .where(whereFilter)\n\nvar trigger = data\n    |deadman(threshold, period)\n        .stateChangesOnly()\n        .message(message)\n        .id(idVar)\n        .idTag(idTag)\n        .levelTag(levelTag)\n        .messageField(messageField)\n        .durationField(durationField)\n        .hipChat()\n        .room('asdf')\n\ntrigger\n    |eval(lambda: \"emitted\")\n        .as('value')\n        .keep('value', messageField, durationField)\n    |eval(lambda: float(\"value\"))\n        .as('value')\n        .keep()\n    |influxDBOut()\n        .create()\n        .database(outputDB)\n        .retentionPolicy(outputRP)\n        .measurement(outputMeasurement)\n        .tag('alertName', name)\n        .tag('triggerType', triggerType)\n\ntrigger\n    |httpOut('output')\n",
    every: '',
    alertNodes: {
      typeOf: 'alert',
      stateChangesOnly: true,
      useFlapping: false,
      post: [],
      tcp: [],
      email: [],
      exec: [],
      log: [],
      victorOps: [],
      pagerDuty: [],
      pushover: [],
      sensu: [],
      slack: [],
      telegram: [],
      hipChat: [
        {
          room: 'asdf',
          token: '',
        },
      ],
      alerta: [],
      opsGenie: [],
      talk: [],
    },
    message: '',
    details: '',
    trigger: 'deadman',
    values: {
      period: '24h0m0s',
      rangeValue: '',
    },
    name: 'pineapples',
    type: 'stream',
    dbrps: [
      {
        db: 'telegraf',
        rp: 'autogen',
      },
    ],
    status: 'enabled',
    executing: false,
    error: '',
    created: '2018-01-05T15:44:54.657212781-08:00',
    modified: '2018-03-13T17:17:19.099800735-07:00',
    'last-enabled': '2018-03-13T17:17:15.964357573-07:00',
    links: {
      self:
        '/chronograf/v1/sources/1/kapacitors/1/rules/chronograf-v1-7734918d-b8b6-460d-a416-34767ba76aac',
      kapacitor:
        '/chronograf/v1/sources/1/kapacitors/1/proxy?path=%2Fkapacitor%2Fv1%2Ftasks%2Fchronograf-v1-7734918d-b8b6-460d-a416-34767ba76aac',
      output:
        '/chronograf/v1/sources/1/kapacitors/1/proxy?path=%2Fkapacitor%2Fv1%2Ftasks%2Fchronograf-v1-7734918d-b8b6-460d-a416-34767ba76aac%2Foutput',
    },
  },
]

export const authLinks = {
  allUsers: '/chronograf/v1/users',
  auth: [
    {
      callback: '/oauth/github/callback',
      label: 'Github',
      login: '/oauth/github/login',
      logout: '/oauth/github/logout',
      name: 'github',
    },
  ],
  config: {
    auth: '/chronograf/v1/config/auth',
    self: '/chronograf/v1/config',
  },
  dashboards: '/chronograf/v1/dashboards',
  environment: '/chronograf/v1/env',
  external: {
    statusFeed: 'https://www.influxdata.com/feed/json',
  },
  layouts: '/chronograf/v1/layouts',
  logout: '/oauth/logout',
  mappings: '/chronograf/v1/mappings',
  me: '/chronograf/v1/me',
  organizations: '/chronograf/v1/organizations',
  sources: '/chronograf/v1/sources',
  users: '/chronograf/v1/organizations/default/users',
}