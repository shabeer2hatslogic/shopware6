const { Application } = Shopware;
import ApiService from '../api.service';

Application.addServiceProviderDecorator('systemConfigApiService', (container) => {
    const decoratedMethod = container.batchSave;

    container.batchSave = function (values, additionalParams = {}, additionalHeaders = {}) {
        return this.httpClient
            .post(
                '_action/system-config/batch',
                values,
                {
                    params: { ...additionalParams },
                    headers: this.getBasicHeaders(additionalHeaders),
                },
            )
            .then((response) => {
                this.errorResolver.cleanWriteErrors();
                return ApiService.handleResponse(response);
            })
            .catch(errors => {
                if (errors?.response?.data?.errors) {
                    this.errorResolver.handleWriteErrors(errors.response.data.errors);
                } else {
                    console.error('No errors found in the response:', errors);
                }
                throw errors;
            });
    };

    return container;
});
