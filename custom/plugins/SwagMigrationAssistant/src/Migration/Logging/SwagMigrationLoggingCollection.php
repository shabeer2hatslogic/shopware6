<?php declare(strict_types=1);
/*
 * (c) shopware AG <info@shopware.com>
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace SwagMigrationAssistant\Migration\Logging;

use Shopware\Core\Framework\DataAbstractionLayer\EntityCollection;
use Shopware\Core\Framework\Log\Package;

/**
 * @extends EntityCollection<SwagMigrationLoggingEntity>
 */
#[Package('services-settings')]
class SwagMigrationLoggingCollection extends EntityCollection
{
    protected function getExpectedClass(): string
    {
        return SwagMigrationLoggingEntity::class;
    }
}
