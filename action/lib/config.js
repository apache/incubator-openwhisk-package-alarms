/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function getOpenWhiskConfig(triggerData) {
    return {ignore_certs: true, namespace: triggerData.namespace, api_key: triggerData.apikey};
}

function constructTriggerID(triggerData) {
    var triggerID = `${triggerData.namespace}/${triggerData.name}`;
    if (triggerData.apikey) {
        triggerID = `${triggerData.apikey}/${triggerID}`;
    }
    return triggerID;
}

function addAdditionalData(params) {
    //insert code here to store additional trigger data in the database
    //for example, params.additionalData = {dateCreated: Date.now()};
}

module.exports = {
    'addAdditionalData': addAdditionalData,
    'getOpenWhiskConfig': getOpenWhiskConfig,
    'constructTriggerID': constructTriggerID
};
