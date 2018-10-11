#!/bin/bash
#
# Licensed to the Apache Software Foundation (ASF) under one or more
# contributor license agreements.  See the NOTICE file distributed with
# this work for additional information regarding copyright ownership.
# The ASF licenses this file to You under the Apache License, Version 2.0
# (the "License"); you may not use this file except in compliance with
# the License.  You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

SCRIPTDIR=$(cd $(dirname "$0") && pwd)
HOMEDIR="$SCRIPTDIR/../../../"

cd $HOMEDIR
git clone https://github.com/apache/incubator-openwhisk-utilities.git

cd $HOMEDIR
git clone --depth=1 --single-branch -b scala-2-12 https://github.com/chetanmeh/incubator-openwhisk.git openwhisk
cd $HOMEDIR/openwhisk
./tools/travis/setup.sh

TERM=dumb ./gradlew \
:common:scala:install \
:core:controller:install \
:core:invoker:install \
:tests:install
