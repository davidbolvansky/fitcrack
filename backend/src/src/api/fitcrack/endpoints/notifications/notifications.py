'''
   * Author : see AUTHORS
   * Licence: MIT, see LICENSE
'''

import logging

from flask import request
from flask_login import current_user, login_required
from flask_restx import Resource

from src.api.apiConfig import api
from src.api.fitcrack.endpoints.notifications.argumentsParser import notifications_parser
from src.api.fitcrack.endpoints.notifications.functions import getNotifications
from src.api.fitcrack.endpoints.notifications.responseModels import page_of_notifications_model, \
    notification_count_model
from src.database.models import FcNotification

log = logging.getLogger(__name__)
ns = api.namespace('notifications', description='Endpoints for graph representation.')


@ns.route('')
class notifications(Resource):

    @api.expect(notifications_parser)
    @api.marshal_with(page_of_notifications_model)
    def get(self):
        """
        Returns user's notifications.
        """
        args = notifications_parser.parse_args(request)
        page = args.get('page', 1)
        per_page = args.get('per_page', 10)
        mark_as_seen = args.get('seen', True)

        notifications = getNotifications(current_user.id, page, per_page, mark_as_seen)
        return notifications

@ns.route('/count')
class notifications(Resource):

    @api.marshal_with(notification_count_model)
    def get(self):
        """
        Returns number of unreaded notifications.
        """

        count = FcNotification.query.filter(FcNotification.user_id == current_user.id).filter(
            FcNotification.seen == False).count()

        return {'count': count}
