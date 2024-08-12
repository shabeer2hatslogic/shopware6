<?php declare(strict_types=1);
/*
 * (c) shopware AG <info@shopware.com>
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace SwagMigrationAssistant\Profile\Shopware\Logging\Log;

use Shopware\Core\Framework\Log\Package;
use SwagMigrationAssistant\Migration\Logging\Log\BaseRunLogEntry;

#[Package('services-settings')]
class UnsupportedNumberRangeTypeLog extends BaseRunLogEntry
{
    public function __construct(
        string $runId,
        string $entity,
        string $sourceId,
        private readonly string $type
    ) {
        parent::__construct($runId, $entity, $sourceId);
    }

    public function getLevel(): string
    {
        return self::LOG_LEVEL_INFO;
    }

    public function getCode(): string
    {
        return 'SWAG_MIGRATION__SHOPWARE_UNSUPPORTED_NUMBER_RANGE_TYPE';
    }

    public function getTitle(): string
    {
        return 'Unsupported number range type';
    }

    /**
     * @return array{entity: ?string, sourceId: ?string, type: string}
     */
    public function getParameters(): array
    {
        return [
            'entity' => $this->getEntity(),
            'sourceId' => $this->getSourceId(),
            'type' => $this->type,
        ];
    }

    public function getDescription(): string
    {
        $args = $this->getParameters();

        return \sprintf(
            'NumberRange-Entity with source id "%s" could not be converted because of unsupported type: %s.',
            $args['sourceId'],
            $args['type']
        );
    }
}
