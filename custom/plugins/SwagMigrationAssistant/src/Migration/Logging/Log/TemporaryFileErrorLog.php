<?php declare(strict_types=1);
/*
 * (c) shopware AG <info@shopware.com>
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace SwagMigrationAssistant\Migration\Logging\Log;

use Shopware\Core\Framework\Log\Package;

#[Package('services-settings')]
class TemporaryFileErrorLog extends BaseRunLogEntry
{
    public function __construct(
        string $runId,
        string $entity,
        ?string $sourceId = null
    ) {
        parent::__construct($runId, $entity, $sourceId);
    }

    public function getLevel(): string
    {
        return self::LOG_LEVEL_ERROR;
    }

    public function getCode(): string
    {
        return 'SWAG_MIGRATION__TEMPORARY_FILE_COULD_NOT_BE_CREATED';
    }

    public function getTitle(): string
    {
        return 'An exception occurred';
    }

    /**
     * @return array{entity: ?string, sourceId: ?string, exceptionCode: int|string, description: string}
     */
    public function getParameters(): array
    {
        return [
            'entity' => $this->getEntity(),
            'sourceId' => $this->getSourceId(),
            'exceptionCode' => $this->getCode(),
            'description' => 'The temporary file for media download could not be created',
        ];
    }

    public function getDescription(): string
    {
        return $this->getParameters()['description'];
    }
}
